import {
  Observable,
  combineLatest,
  concat,
  interval,
  map,
  of,
  scan,
  shareReplay,
  switchMap,
  withLatestFrom,
} from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { ProgVm } from './progvm'
import { butterfly } from 'butterfloat'

export class CompRadProgVm {
  // *** Experiment modification fields ***
  minBar = 1
  maxGrowthPerTick = 90
  maxCatchPerTick = 15
  catchSpinRate = 2
  growthSpinRate = 1
  spinTicks = 2
  spinRate = 1

  // Internal counter during ticks
  #spinTickCount = 0

  // *** Butterflies and observables ***

  readonly #progressAdded: Observable<ProgVm | null>
  readonly #addProgress: (progress: ProgVm) => void
  get progressAdded() {
    return this.#progressAdded
  }
  readonly #inprogress: ProgVm[] = []
  get progressCount() {
    return this.#inprogress.length
  }
  get pausedStatus() {
    return combineLatest(this.#inprogress.map((prog) => prog.paused))
  }

  readonly #targetPercent: Observable<number>
  get targetPercent() {
    return this.#targetPercent
  }

  readonly #targetRoundPercent: Observable<string>
  get targetRoundPercent() {
    return this.#targetRoundPercent
  }

  readonly #targetVal: Observable<number>
  get targetVal() {
    return this.#targetVal
  }

  readonly #currentVal: Observable<number>
  get currentVal() {
    return this.#currentVal
  }

  readonly #currentOffset: Observable<number>
  get currentOffset() {
    return this.#currentOffset
  }

  constructor(ticks?: Observable<unknown>) {
    ;[this.#progressAdded, this.#addProgress] = butterfly<ProgVm | null>(null)

    this.#targetPercent = concat(
      of(0),
      this.progressAdded.pipe(
        switchMap(() => {
          return combineLatest(
            this.#inprogress.map((progress) => progress.percent),
          )
        }),
        tag('target-percent-progresses'),
        map((progresses) =>
          progresses.length
            ? progresses.reduce((a, b) => a + b, 0) / progresses.length
            : 0,
        ),
      ),
    ).pipe(tag('target-percent-raw'), shareReplay(1))

    this.#targetRoundPercent = this.targetPercent.pipe(
      map((target) => target.toLocaleString(undefined, { style: 'percent' })),
    )

    this.#targetVal = this.targetPercent.pipe(
      map((target) => Math.round(target * 360)),
    )

    const current = concat(
      of([0, 0]),
      (ticks ?? interval(500)).pipe(
        switchMap(() =>
          Promise.all(this.#inprogress.map((item) => item.tick())),
        ),
        withLatestFrom(this.targetVal),
        scan(
          ([currentVal, currentOffset], [, targetVal]) =>
            this.#onTick(currentVal, currentOffset, targetVal),
          [0, 0],
        ),
      ),
    ).pipe(tag('vm-current'), shareReplay(1))

    this.#currentVal = current.pipe(map(([currentVal]) => currentVal))
    this.#currentOffset = current.pipe(
      map(([, currentOffset]) => currentOffset),
    )
  }

  pauseAll() {
    this.#inprogress.forEach((item) => item.pause())
  }

  unpauseAll() {
    this.#inprogress.forEach((item) => item.unpause())
  }

  addItem() {
    const progress = new ProgVm()
    this.#inprogress.unshift(progress)
    this.#addProgress(progress)
  }

  #onTick(
    currentVal: number,
    currentOffset: number,
    targetVal: number,
  ): [currentVal: number, currentOffset: number] {
    // update radial
    if (currentVal < this.minBar) {
      currentVal = this.minBar
    }

    if (targetVal > currentVal) {
      const diff = Math.min(targetVal - currentVal, this.maxGrowthPerTick)
      currentVal += diff
      if (this.growthSpinRate) {
        currentOffset = (currentOffset + this.growthSpinRate) % 360
      }
      this.#spinTickCount = 0
    } else if (targetVal < currentVal && currentVal > this.minBar) {
      const diff = Math.min(currentVal - targetVal, this.maxCatchPerTick)
      currentVal = Math.max(currentVal - diff, this.minBar)
      const offset = (currentOffset + diff + this.catchSpinRate) % 360
      currentOffset = offset
      this.#spinTickCount = 0
    } else if (currentVal < 360) {
      this.#spinTickCount++
      if (this.#spinTickCount == this.spinTicks) {
        currentOffset = (currentOffset + this.spinRate) % 360
        this.#spinTickCount = 0
      }
    } else if (currentVal == 360 && currentOffset != 0) {
      // once complete, reset the offset for the next run
      currentOffset = 0
    }
    return [currentVal, currentOffset]
  }
}
