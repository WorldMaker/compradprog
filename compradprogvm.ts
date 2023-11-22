import {
  Observable,
  Subscription,
  combineLatest,
  combineLatestAll,
  concat,
  concatMap,
  filter,
  interval,
  map,
  of,
  scan,
  shareReplay,
  withLatestFrom,
} from 'rxjs'
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

  readonly #subscription = new Subscription()

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

  constructor(dial?: JQuery<HTMLElement>, ticks?: Observable<unknown>) {
    ;[this.#progressAdded, this.#addProgress] = butterfly<ProgVm | null>(null)

    this.#targetPercent = this.progressAdded.pipe(
      filter((progress) => progress !== null),
      map((progress) => progress!.percent),
      combineLatestAll(),
      map(
        (progresses) => progresses.reduce((a, b) => a + b) / progresses.length,
      ),
      shareReplay(1),
    )

    this.#targetRoundPercent = this.targetPercent.pipe(
      map((target) => target.toLocaleString(undefined, { style: 'percent' })),
    )

    this.#targetVal = this.targetPercent.pipe(
      map((target) => Math.round(target * 360)),
    )

    const current = concat(
      of([0, 0]),
      (ticks ?? interval(500)).pipe(
        concatMap(() =>
          Promise.all(this.#inprogress.map((item) => item.tick())),
        ),
        withLatestFrom(this.targetVal),
        scan(
          ([currentVal, currentOffset], [, targetVal]) =>
            this.#onTick(currentVal, currentOffset, targetVal),
          [0, 0],
        ),
        shareReplay(1),
      ),
    )

    this.#currentVal = current.pipe(map(([currentVal]) => currentVal))
    this.#currentOffset = current.pipe(
      map(([, currentOffset]) => currentOffset),
    )

    if (dial) {
      this.#subscription.add(
        this.currentVal.subscribe((currentVal) =>
          dial.val(currentVal).trigger('change'),
        ),
      )

      this.#subscription.add(
        this.currentOffset.subscribe((currentOffset) =>
          dial.trigger('configure', { angleOffset: currentOffset }),
        ),
      )
    } else {
      console.warn('Unable to subscribe jQuery Knob dial to progress changes')
    }
  }

  pauseAll() {
    this.#inprogress.forEach((item) => item.pause())
  }

  unpauseAll() {
    this.#inprogress.forEach((item) => item.unpause())
  }

  addItem() {
    const progress = new ProgVm()
    this.#addProgress(progress)
    this.#inprogress.unshift(new ProgVm())
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
        currentOffset += this.growthSpinRate
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

  unsubscribe() {
    this.#subscription.unsubscribe()
  }
}
