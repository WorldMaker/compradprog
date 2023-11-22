import { ComponentContext, ObservableEvent, jsx, run } from 'butterfloat'
import $ from 'jquery'
import {
  Observable,
  filter,
  interval,
  map,
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

  const targetRoundPercent = vm.pipe(
    switchMap((vm) => vm.targetRoundPercent),
    tag('target-percent'),
    shareReplay(1),
  )

  const progressStyle = targetRoundPercent.pipe(
    map((targetRoundPercent) => `min-width: 2em; width: ${targetRoundPercent}`),
    tag('progress-style'),
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

  return (
    <div className="row">
      <div className="col-md-6">
        <input
          type="text"
          id="dial"
          className="dial"
          value="0"
          events={{ bfDomAttach }}
        />
        <label htmlFor="dial" className="hidden">
          Total Progress
        </label>
      </div>
      <div className="col-md-6">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style="min-width: 2em"
            bind={{ innerText: targetRoundPercent, style: progressStyle }}
          ></div>
        </div>
        <button
          type="button"
          className="btn btn-default"
          events={{ click: addItem }}
        >
          <span className="glyphicon glyphicon-plus"></span> Add Item
        </button>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-default"
            events={{ click: pauseAll }}
          >
            <span className="glyphicon glyphicon-pause"></span> All
          </button>
          <button
            type="button"
            className="btn btn-default"
            events={{ click: unpauseAll }}
          >
            <span className="glyphicon glyphicon-play"></span> All
          </button>
        </div>

        <div className="list-group" childrenBind={children} childrenPrepend />
      </div>
    </div>
  )
}

const container = document.getElementById('container')!
run(container, Main)
