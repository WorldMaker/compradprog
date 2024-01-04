import {
  ComponentContext,
  Fragment,
  ObservableEvent,
  jsx,
  run,
} from 'butterfloat'
import $ from 'jquery'
import {
  Observable,
  filter,
  interval,
  map,
  scan,
  shareReplay,
  switchMap,
  withLatestFrom,
} from 'rxjs'
import { create } from 'rxjs-spy'
import { tag } from 'rxjs-spy/operators'
import { CompRadProgVm } from './compradprogvm'
import { Progress } from './progress'

const spy = create()

// Set global for jquery-knob
const w = window as any
w.jQuery = w.$ = $

// @ts-ignore
await import('jquery-knob')

interface MainEvents {
  toggleMenu: ObservableEvent<MouseEvent>
  addItem: ObservableEvent<MouseEvent>
  attach: ObservableEvent<HTMLElement>
  pauseAll: ObservableEvent<MouseEvent>
  unpauseAll: ObservableEvent<MouseEvent>
}

function Main(
  _props: {},
  { bindImmediateEffect, events }: ComponentContext<MainEvents>,
) {
  const { addItem, pauseAll, unpauseAll } = events

  const bfDomAttach = events.attach

  const vm = bfDomAttach.pipe(
    switchMap((element) => {
      return new Observable<CompRadProgVm>((subscriber) => {
        // create and bind
        const dial = $(element)

        dial.knob({
          min: 0,
          max: 360,
          readOnly: true,
          displayInput: false,
        })

        const vm = new CompRadProgVm(dial, interval(500))
        subscriber.next(vm)
        return () => vm.unsubscribe()
      })
    }),
    tag('vm'),
    shareReplay(1),
  )

  const targetPercent = vm.pipe(switchMap((vm) => vm.targetPercent))

  const targetRoundPercent = vm.pipe(
    switchMap((vm) => vm.targetRoundPercent),
    tag('target-round-percent'),
    shareReplay(1),
  )

  bindImmediateEffect(
    addItem.pipe(withLatestFrom(vm), tag('add-item')),
    ([, vm]) => vm.addItem(),
  )

  bindImmediateEffect(
    pauseAll.pipe(withLatestFrom(vm), tag('pause-all')),
    ([, vm]) => vm.unpauseAll(),
  )

  bindImmediateEffect(
    unpauseAll.pipe(withLatestFrom(vm), tag('unpause-all')),
    ([, vm]) => vm.unpauseAll(),
  )

  const children = vm.pipe(
    switchMap((vm) => vm.progressAdded),
    filter((progVm) => progVm !== null),
    map((progVm) => () => <Progress item={progVm!} />),
    tag('children'),
  )

  const menuIsActive = events.toggleMenu.pipe(
    scan((acc) => !acc, false),
    shareReplay(1),
  )

  return (
    <>
      <section class="hero is-primary">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a
                  class="navbar-item"
                  href="https://worldmaker.net/compradprog/"
                >
                  CompRadProg
                </a>
                <a
                  role="button"
                  class="navbar-burger"
                  title="menu"
                  bind={{ ariaExpanded: menuIsActive }}
                  classBind={{ 'is-active': menuIsActive }}
                  events={{ click: events.toggleMenu }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div
                class="navbar-menu"
                classBind={{ 'is-active': menuIsActive }}
              >
                <div class="navbar-end">
                  <a
                    class="navbar-item is-active"
                    href="https://worldmaker.net/compradprog/"
                  >
                    Demo
                  </a>
                  <a
                    class="navbar-item"
                    href="https://blog.worldmaker.net/2015/03/17/compradprog/"
                  >
                    Motivation
                  </a>
                  <span class="navbar-item">
                    <a
                      class="button is-primary is-inverted"
                      href="https://github.com/WorldMaker/compradprog/"
                    >
                      <span class="icon">
                        <i class="fa fa-github"></i>
                      </span>
                      <span>Source</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Composite Radial Progress Demo</p>
            <p class="subtitle">
              Visualize complex multi-item progress with a combined radial
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div className="dashboard">
          <div className="dial">
            <input
              type="text"
              id="dial"
              className="dial"
              value="0"
              events={{ bfDomAttach }}
            />
            <label htmlFor="dial" className="is-hidden">
              Total Progress Dial
            </label>
          </div>
          <div className="total">
            <div className="level">
              <div className="level-item">
                <div>
                  <div className="heading is-capitalized">Total Progress</div>
                  <div
                    className="title"
                    bind={{ innerText: targetRoundPercent }}
                  ></div>
                </div>
              </div>
              <div className="level-item is-flex-grow-5">
                <progress
                  className="progress is-info"
                  bind={{
                    innerText: targetRoundPercent,
                    bfDelayValue: targetPercent,
                  }}
                ></progress>
              </div>
            </div>

            <div className="level">
              <div className="level-left">
                <button
                  type="button"
                  className="button"
                  events={{ click: addItem }}
                >
                  <span className="icon">
                    <span className="fa fa-plus"></span>
                  </span>
                  <span>Add Item</span>
                </button>
              </div>
              <div className="level-right">
                <div className="buttons has-addons">
                  <button
                    type="button"
                    className="button"
                    title="Pause All"
                    events={{ click: pauseAll }}
                  >
                    <span className="icon">
                      <span className="fa fa-pause"></span>
                    </span>
                    <span>All</span>
                  </button>
                  <button
                    type="button"
                    className="button"
                    title="Resume All"
                    events={{ click: unpauseAll }}
                  >
                    <span className="icon">
                      <span className="fa fa-play"></span>
                    </span>
                    <span>All</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="items"
            childrenBind={children}
            childrenBindMode="prepend"
          />
        </div>
      </section>
    </>
  )
}

const container = document.getElementById('container')!
run(container, Main)
