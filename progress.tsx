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

  const notPaused = item.paused.pipe(map((paused) => !paused))

  bindImmediateEffect(finish, () => item.finish())
  bindImmediateEffect(pause, () => item.pause())
  bindImmediateEffect(slowDown, () => item.slowDown())
  bindImmediateEffect(speedUp, () => item.speedUp())
  bindImmediateEffect(unpause, () => item.unpause())

  return (
    <div className="card">
      <div className="level">
        <div className="level-item">
          <div className="buttons has-addons">
            <button
              type="button"
              title="Pause"
              className="button"
              styleBind={{ display: pauseDisplay }}
              events={{ click: pause }}
            >
              <span className="icon">
                <span className="fa fa-pause"></span>
              </span>
            </button>
            <button
              type="button"
              title="Unpause"
              className="button"
              styleBind={{ display: unpauseDisplay }}
              events={{ click: unpause }}
            >
              <span className="icon">
                <span class="fa fa-play"></span>
              </span>
            </button>
            <button
              type="button"
              title="Slow Down"
              className="button"
              events={{ click: slowDown }}
            >
              <span className="icon">
                <span className="fa fa-backward"></span>
              </span>
            </button>
            <button
              type="button"
              title="Speed Up"
              className="button"
              events={{ click: speedUp }}
            >
              <span className="icon">
                <span className="fa fa-forward"></span>
              </span>
            </button>
            <button
              type="button"
              title="Finish"
              className="button"
              events={{ click: finish }}
            >
              <span className="icon">
                <span className="fa fa-fast-forward"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="level-item">
          <div>
            <div className="heading is-capitalized">Item Progress</div>
            <div
              className="title"
              bind={{ innerText: item.roundPercent }}
            ></div>
          </div>
        </div>
        <div className="level-item is-flex-grow-5">
          <progress
            className="progress"
            bind={{
              innerText: item.roundPercent,
              bfDelayValue: item.percent,
            }}
            classBind={{
              'is-info': notPaused,
              'is-warning': item.paused,
            }}
          ></progress>
        </div>
      </div>
    </div>
  )
}
