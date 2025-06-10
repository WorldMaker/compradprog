import { ComponentContext, Fragment, ObservableEvent, jsx } from 'butterfloat'
import { Github, Pause, Play, Plus } from 'lucide'
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
import { tag } from 'rxjs-spy/operators'
import { CompRadProgVm } from './compradprogvm'
import { Icon } from './icon'
import { Progress } from './progress'

interface MainEvents {
  toggleMenu: ObservableEvent<MouseEvent>
  addItem: ObservableEvent<MouseEvent>
  attach: ObservableEvent<HTMLElement>
  pauseAll: ObservableEvent<MouseEvent>
  unpauseAll: ObservableEvent<MouseEvent>
}

export function Main(
  _props: {},
  { bindImmediateEffect, events }: ComponentContext<MainEvents>,
) {
  const { addItem, attach, pauseAll, unpauseAll } = events

  const vm = new CompRadProgVm(interval(500))
  const { targetPercent, targetRoundPercent, currentOffset, currentVal } = vm

  const angleClass = currentOffset.pipe(
    map((offset) => `angle-${offset}`),
    tag('angle-class'),
  )

  const currentValueStyle = currentVal.pipe(
    map((val) => `--o-progress: ${val};`),
    tag('current-value-style'),
  )

  bindImmediateEffect(addItem, () => vm.addItem())

  bindImmediateEffect(attach, (el: HTMLElement) => {
    // Have to set this manually for now because there aren't any of the other signs for attribute binding such as hyphen
    el.setAttribute('max', '360')
  })

  bindImmediateEffect(pauseAll, () => vm.unpauseAll())

  bindImmediateEffect(unpauseAll, () => vm.unpauseAll())

  const children = vm.progressAdded.pipe(
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
                  bind={{
                    ariaExpanded: menuIsActive.pipe(map((a) => a.toString())),
                  }}
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
                        <Icon icon={Github} />
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
        <div class="dashboard">
          <div class="bigbang dial">
            <div class="gravity-spot">
              <div class="orbit-4">
                <o-progress
                  shape="circle"
                  bind={{
                    /* can't bind to o-progress `value` because attribute not property, can't use styleBind because variable not a property */
                    style: currentValueStyle,
                    /* can't use classBind because "dynamic" class name */
                    className: angleClass,
                  }}
                  events={{ bfDomAttach: attach }}
                ></o-progress>
              </div>
              <div class="orbit-0">
                <div class="satellite">
                  <div
                    class="capsule"
                    bind={{ innerText: targetRoundPercent }}
                  />
                </div>
              </div>
            </div>
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
                    <Icon icon={Plus} />
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
                      <Icon icon={Pause} />
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
                      <Icon icon={Play} />
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
