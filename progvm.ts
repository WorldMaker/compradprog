import { StateSetter, butterfly } from 'butterfloat'
import { firstValueFrom, Observable, map, shareReplay } from 'rxjs'
import { tag } from 'rxjs-spy/operators'

export const BaseSpeed = 0.005
export const SpeedMultiplier = 2

export class ProgVm {
  readonly #name: Observable<string>
  readonly #setName: (name: StateSetter<string>) => void
  get name() {
    return this.#name
  }

  readonly #percent: Observable<number>
  readonly #setPercent: (percent: StateSetter<number>) => void
  get percent() {
    return this.#percent
  }

  readonly #roundPercent: Observable<string>
  get roundPercent() {
    return this.#roundPercent
  }

  readonly #paused: Observable<boolean>
  readonly #setPaused: (paused: StateSetter<boolean>) => void
  get paused() {
    return this.#paused
  }

  readonly #perTick: Observable<number>
  readonly #setPerTick: (perTick: StateSetter<number>) => void
  get perTick() {
    return this.#perTick
  }

  constructor() {
    ;[this.#name, this.#setName] = butterfly('Item')
    ;[this.#percent, this.#setPercent] = butterfly(0)
    ;[this.#paused, this.#setPaused] = butterfly(false)
    ;[this.#perTick, this.#setPerTick] = butterfly(BaseSpeed)

    this.#roundPercent = this.percent.pipe(
      map((percent) => percent.toLocaleString(undefined, { style: 'percent' })),
      tag('progvm-round-percent'),
      shareReplay(1),
    )
  }

  pause() {
    this.#setPaused(true)
  }
  unpause() {
    this.#setPaused(false)
  }
  speedUp() {
    this.#setPerTick((perTick) => perTick * SpeedMultiplier)
  }
  slowDown() {
    this.#setPerTick((perTick) => perTick / SpeedMultiplier)
  }
  async tick() {
    const paused = await firstValueFrom(this.paused)
    const perTick = paused ? 0 : await firstValueFrom(this.perTick)
    this.#setPercent((percent) => Math.min(percent + perTick, 1))
  }
  finish() {
    this.#setPercent(1)
  }
}
