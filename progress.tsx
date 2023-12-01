import { ComponentContext, ObservableEvent, jsx } from 'butterfloat'
import { map } from 'rxjs'
import { ProgVm } from './progvm'

export interface ProgressProps {
  item: ProgVm
}

interface ProgressEvents {
  finish: ObservableEvent<MouseEvent>
  pause: ObservableEvent<MouseEvent>
  slowDown: ObservableEvent<MouseEvent>
  speedUp: ObservableEvent<MouseEvent>
  unpause: ObservableEvent<MouseEvent>
}

export function Progress(
  { item }: ProgressProps,
  { bindImmediateEffect, events }: ComponentContext<ProgressEvents>,
) {
  const { finish, pause, slowDown, speedUp, unpause } = events

  const pauseDisplay = item.paused.pipe(
    map((paused) => (paused ? `none` : `block`)),
  )

  const unpauseDisplay = item.paused.pipe(
    map((paused) => (paused ? `block` : `none`)),
  )

  bindImmediateEffect(finish, () => item.finish())
  bindImmediateEffect(pause, () => item.pause())
  bindImmediateEffect(slowDown, () => item.slowDown())
  bindImmediateEffect(speedUp, () => item.speedUp())
  bindImmediateEffect(unpause, () => item.unpause())

  return (
    <div className="list-group-item">
      <div className="progress">
        <div
          title="Item Progress"
          className="progress-bar"
          role="progressbar"
          style="min-width: 2em"
          bind={{ innerText: item.roundPercent }}
          styleBind={{ width: item.roundPercent }}
        ></div>
      </div>
      <div className="btn-group">
        <button
          type="button"
          title="Pause"
          className="btn btn-default"
          styleBind={{ display: pauseDisplay }}
          events={{ click: pause }}
        >
          <span className="glyphicon glyphicon-pause"></span>
        </button>
        <button
          type="button"
          title="Unpause"
          className="btn btn-default"
          styleBind={{ display: unpauseDisplay }}
          events={{ click: unpause }}
        >
          <span class="glyphicon glyphicon-play"></span>
        </button>
        <button
          type="button"
          title="Slow Down"
          className="btn btn-default"
          events={{ click: slowDown }}
        >
          <span className="glyphicon glyphicon-backward"></span>
        </button>
        <button
          type="button"
          title="Speed Up"
          className="btn btn-default"
          events={{ click: speedUp }}
        >
          <span className="glyphicon glyphicon-forward"></span>
        </button>
        <button
          type="button"
          title="Finish"
          className="btn btn-default"
          events={{ click: finish }}
        >
          <span className="glyphicon glyphicon-fast-forward"></span>
        </button>
      </div>
    </div>
  )
}
