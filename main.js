import ko from "knockout"
import $ from "jquery"

// Set global for jquery-knob
window.jQuery = window.$ = $
var knobLoad = (async () => {
  await import('jquery-knob')
  $("#dial").knob()
})()

export class progVm {
  constructor() {
    this.name = ko.observable("Item")
    this.percent = ko.observable(0)
    this.roundPercent = ko.computed(() => Math.round(this.percent() * 100))
    this.paused = ko.observable(false)
    this.perTick = ko.observable(0.005)
  }

  pause() {
    this.paused(true)
  }
  unpause() {
    this.paused(false)
  }
  speedUp() {
    this.perTick(this.perTick() * 2)
  }
  slowDown() {
    this.perTick(this.perTick() / 2)
  }
  finish() {
    this.percent(1)
  }
}

export class viewModel {
  constructor() {
    this.minBar = 1
    this.maxGrowthPerTick = 90
    this.maxCatchPerTick = 15
    this.catchSpinRate = 2
    this.growthSpinRate = 1
    this.spinTicks = 2
    this.spinTickCount = 0
    this.spinRate = 1

    this.inprogress = ko.observableArray()

    this.targetPercent = ko.computed(() =>
      this.inprogress().length > 0
        ? this.inprogress()
            .map((item) => item.percent())
            .reduce((a, b) => a + b) / this.inprogress().length
        : 0
    )
    this.targetRoundPercent = ko.computed(() =>
      Math.round(this.targetPercent() * 100)
    )
    this.targetVal = ko.computed(() => Math.round(this.targetPercent() * 360))
    this.currentVal = ko.observable(0)
    this.currentVal.subscribe((v) => $("#dial").val(v).trigger("change"))
    this.currentOffset = ko.observable(0)
    this.currentOffset.subscribe((v) =>
      $("#dial").trigger("configure", { angleOffset: this.currentOffset() })
    )
  }

  pauseAll() {
    this.inprogress().forEach((item) => item.paused(true))
  }

  unpauseAll() {
    this.inprogress().forEach((item) => item.paused(false))
  }

  addItem() {
    this.inprogress.unshift(new progVm())
  }

  tick() {
    // update item percentages
    this.inprogress().forEach((item) => {
      if (!item.paused() && item.percent() < 1) {
        item.percent(Math.min(item.percent() + item.perTick(), 1))
      }
    })

    // update radial
    if (this.currentVal() < this.minBar) {
      this.currentVal(this.minBar)
    }

    if (this.targetVal() > this.currentVal()) {
      var diff = Math.min(
        this.targetVal() - this.currentVal(),
        this.maxGrowthPerTick
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
      var diff = Math.min(
        this.currentVal() - this.targetVal(),
        this.maxCatchPerTick
      )
      this.currentVal(Math.max(this.currentVal() - diff, this.minBar))
      var offset = this.currentOffset() + diff + this.catchSpinRate
      if (offset >= 360) {
        offset -= 360
      }
      this.currentOffset(offset)
      this.spinTickCount = 0
    } else if (this.currentVal() < 360) {
      this.spinTickCount++
      if (this.spinTickCount == this.spinTicks) {
        this.currentOffset(this.currentOffset() + this.spinRate)
        if (this.currentOffset() == 360) {
          this.currentOffset(0)
        }
        this.spinTickCount = 0
      }
    } else if (this.currentVal() == 360 && this.currentOffset() != 0) {
      // once complete, reset the offset for the next run
      this.currentOffset(0)
    }
  }
}

// create and bind
var vm = new viewModel()
ko.applyBindings(vm)
setInterval(() => vm.tick(), 500)
