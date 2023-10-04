import * as ko from 'knockout'

export const BaseSpeed = 0.005
export const SpeedMultiplier = 2

export class ProgVm {
  name = ko.observable('Item')
  percent = ko.observable(0)
  roundPercent = ko.computed(() => Math.round(this.percent() * 100))
  paused = ko.observable(false)
  perTick = ko.observable(BaseSpeed)

  pause() {
    this.paused(true)
  }
  unpause() {
    this.paused(false)
  }
  speedUp() {
    this.perTick(this.perTick() * SpeedMultiplier)
  }
  slowDown() {
    this.perTick(this.perTick() / SpeedMultiplier)
  }
  tick() {
    if (!this.paused() && this.percent() < 1) {
      this.percent(Math.min(this.percent() + this.perTick(), 1))
    }
  }
  finish() {
    this.percent(1)
  }
}
