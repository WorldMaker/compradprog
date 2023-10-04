import * as ko from 'knockout'
import { ProgVm } from './progvm'

export class CompRadProgVm {
    minBar = 1
    maxGrowthPerTick = 90
    maxCatchPerTick = 15
    catchSpinRate = 2
    growthSpinRate = 1
    spinTicks = 2
    spinTickCount = 0
    spinRate = 1
  
    inprogress = ko.observableArray<ProgVm>()
  
    targetPercent = ko.computed(() =>
      this.inprogress().length > 0
        ? this.inprogress()
            .map((item) => item.percent())
            .reduce((a, b) => a + b) / this.inprogress().length
        : 0,
    )
    targetRoundPercent = ko.computed(() => Math.round(this.targetPercent() * 100))
    targetVal = ko.computed(() => Math.round(this.targetPercent() * 360))
    currentVal = ko.observable(0)
    currentOffset = ko.observable(0)
  
    constructor(dial: JQuery<HTMLElement> | undefined) {
      if (dial) {
      this.currentVal.subscribe((v) => dial.val(v).trigger('change'))
  
      this.currentOffset.subscribe((v) =>
        dial.trigger('configure', { angleOffset: this.currentOffset() }),
      )
      } else {
        console.warn('Unable to subscribe jQuery Knob dial to progress changes')
      }
    }
  
    pauseAll() {
      this.inprogress().forEach((item) => item.pause())
    }
  
    unpauseAll() {
      this.inprogress().forEach((item) => item.unpause())
    }
  
    addItem() {
      this.inprogress.unshift(new ProgVm())
    }
  
    tick() {
      // update item percentages
      this.inprogress().forEach((item) => item.tick())
  
      // update radial
      if (this.currentVal() < this.minBar) {
        this.currentVal(this.minBar)
      }
  
      if (this.targetVal() > this.currentVal()) {
        const diff = Math.min(
          this.targetVal() - this.currentVal(),
          this.maxGrowthPerTick,
        )
        this.currentVal(this.currentVal() + diff)
        if (this.growthSpinRate) {
          this.currentOffset(this.currentOffset() + this.growthSpinRate)
        }
        this.spinTickCount = 0
      } else if (
        this.targetVal() < this.currentVal() &&
        this.currentVal() > this.minBar
      ) {
        const diff = Math.min(
          this.currentVal() - this.targetVal(),
          this.maxCatchPerTick,
        )
        this.currentVal(Math.max(this.currentVal() - diff, this.minBar))
        const offset = (this.currentOffset() + diff + this.catchSpinRate) % 360
        this.currentOffset(offset)
        this.spinTickCount = 0
      } else if (this.currentVal() < 360) {
        this.spinTickCount++
        if (this.spinTickCount == this.spinTicks) {
          this.currentOffset((this.currentOffset() + this.spinRate) % 360)
          this.spinTickCount = 0
        }
      } else if (this.currentVal() == 360 && this.currentOffset() != 0) {
        // once complete, reset the offset for the next run
        this.currentOffset(0)
      }
    }
  }
  