import {
  Fragment,
  Icon,
  Progress,
  butterfly,
  jsx,
  require_lucide
} from "./chunk-X4RUJGUJ.js";
import {
  __commonJS,
  __toESM,
  require_cjs
} from "./chunk-QC5UYQHG.js";

// node_modules/rxjs-spy/cjs/operators/hide.js
var require_hide = __commonJS({
  "node_modules/rxjs-spy/cjs/operators/hide.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hide = void 0;
    function hide() {
      return function hideOperation(source) {
        return source.lift(new HideOperator());
      };
    }
    exports.hide = hide;
    var HideOperator = function() {
      function HideOperator2() {
        this.hide = true;
      }
      HideOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(subscriber);
      };
      return HideOperator2;
    }();
  }
});

// node_modules/rxjs-spy/cjs/operators/tag.js
var require_tag = __commonJS({
  "node_modules/rxjs-spy/cjs/operators/tag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tag = void 0;
    function tag4(tag5) {
      return function tagOperation(source) {
        return source.lift(new TagOperator(tag5));
      };
    }
    exports.tag = tag4;
    var TagOperator = function() {
      function TagOperator2(tag5) {
        this.tag = tag5;
      }
      TagOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(subscriber);
      };
      return TagOperator2;
    }();
  }
});

// node_modules/rxjs-spy/cjs/operators/index.js
var require_operators = __commonJS({
  "node_modules/rxjs-spy/cjs/operators/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_hide(), exports);
    __exportStar(require_tag(), exports);
  }
});

// main.tsx
var import_lucide = __toESM(require_lucide(), 1);
var import_rxjs3 = __toESM(require_cjs(), 1);
var import_operators3 = __toESM(require_operators(), 1);

// compradprogvm.ts
var import_rxjs2 = __toESM(require_cjs(), 1);
var import_operators2 = __toESM(require_operators(), 1);

// progvm.ts
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var BaseSpeed = 5e-3;
var SpeedMultiplier = 2;
var ProgVm = class {
  #name;
  #setName;
  get name() {
    return this.#name;
  }
  #percent;
  #setPercent;
  get percent() {
    return this.#percent;
  }
  #roundPercent;
  get roundPercent() {
    return this.#roundPercent;
  }
  #paused;
  #setPaused;
  get paused() {
    return this.#paused;
  }
  #perTick;
  #setPerTick;
  get perTick() {
    return this.#perTick;
  }
  constructor() {
    ;
    [this.#name, this.#setName] = butterfly("Item");
    [this.#percent, this.#setPercent] = butterfly(0);
    [this.#paused, this.#setPaused] = butterfly(false);
    [this.#perTick, this.#setPerTick] = butterfly(BaseSpeed);
    this.#roundPercent = this.percent.pipe(
      (0, import_rxjs.map)((percent) => percent.toLocaleString(void 0, { style: "percent" })),
      (0, import_operators.tag)("progvm-round-percent"),
      (0, import_rxjs.shareReplay)(1)
    );
  }
  pause() {
    this.#setPaused(true);
  }
  unpause() {
    this.#setPaused(false);
  }
  speedUp() {
    this.#setPerTick((perTick) => perTick * SpeedMultiplier);
  }
  slowDown() {
    this.#setPerTick((perTick) => perTick / SpeedMultiplier);
  }
  async tick() {
    const paused = await (0, import_rxjs.firstValueFrom)(this.paused);
    const perTick = paused ? 0 : await (0, import_rxjs.firstValueFrom)(this.perTick);
    this.#setPercent((percent) => Math.min(percent + perTick, 1));
  }
  finish() {
    this.#setPercent(1);
  }
};

// compradprogvm.ts
var CompRadProgVm = class {
  // *** Experiment modification fields ***
  minBar = 1;
  maxGrowthPerTick = 90;
  maxCatchPerTick = 15;
  catchSpinRate = 2;
  growthSpinRate = 1;
  spinTicks = 2;
  spinRate = 1;
  // Internal counter during ticks
  #spinTickCount = 0;
  #subscription = new import_rxjs2.Subscription();
  // *** Butterflies and observables ***
  #progressAdded;
  #addProgress;
  get progressAdded() {
    return this.#progressAdded;
  }
  #inprogress = [];
  get progressCount() {
    return this.#inprogress.length;
  }
  get pausedStatus() {
    return (0, import_rxjs2.combineLatest)(this.#inprogress.map((prog) => prog.paused));
  }
  #targetPercent;
  get targetPercent() {
    return this.#targetPercent;
  }
  #targetRoundPercent;
  get targetRoundPercent() {
    return this.#targetRoundPercent;
  }
  #targetVal;
  get targetVal() {
    return this.#targetVal;
  }
  #currentVal;
  get currentVal() {
    return this.#currentVal;
  }
  #currentOffset;
  get currentOffset() {
    return this.#currentOffset;
  }
  constructor(dial, ticks) {
    ;
    [this.#progressAdded, this.#addProgress] = butterfly(null);
    this.#targetPercent = (0, import_rxjs2.concat)(
      (0, import_rxjs2.of)(0),
      this.progressAdded.pipe(
        (0, import_rxjs2.switchMap)(() => {
          return (0, import_rxjs2.combineLatest)(
            this.#inprogress.map((progress) => progress.percent)
          );
        }),
        (0, import_operators2.tag)("target-percent-progresses"),
        (0, import_rxjs2.map)(
          (progresses) => progresses.length ? progresses.reduce((a, b) => a + b, 0) / progresses.length : 0
        )
      )
    ).pipe((0, import_operators2.tag)("target-percent-raw"), (0, import_rxjs2.shareReplay)(1));
    this.#targetRoundPercent = this.targetPercent.pipe(
      (0, import_rxjs2.map)((target) => target.toLocaleString(void 0, { style: "percent" }))
    );
    this.#targetVal = this.targetPercent.pipe(
      (0, import_rxjs2.map)((target) => Math.round(target * 360))
    );
    const current = (0, import_rxjs2.concat)(
      (0, import_rxjs2.of)([0, 0]),
      (ticks ?? (0, import_rxjs2.interval)(500)).pipe(
        (0, import_rxjs2.switchMap)(
          () => Promise.all(this.#inprogress.map((item) => item.tick()))
        ),
        (0, import_rxjs2.withLatestFrom)(this.targetVal),
        (0, import_rxjs2.scan)(
          ([currentVal, currentOffset], [, targetVal]) => this.#onTick(currentVal, currentOffset, targetVal),
          [0, 0]
        )
      )
    ).pipe((0, import_operators2.tag)("vm-current"), (0, import_rxjs2.shareReplay)(1));
    this.#currentVal = current.pipe((0, import_rxjs2.map)(([currentVal]) => currentVal));
    this.#currentOffset = current.pipe(
      (0, import_rxjs2.map)(([, currentOffset]) => currentOffset)
    );
    if (dial) {
      this.#subscription.add(
        this.currentVal.subscribe(
          (currentVal) => dial.val(currentVal).trigger("change")
        )
      );
      this.#subscription.add(
        this.currentOffset.subscribe(
          (currentOffset) => dial.trigger("configure", { angleOffset: currentOffset })
        )
      );
    } else {
      console.warn("Unable to subscribe jQuery Knob dial to progress changes");
    }
  }
  pauseAll() {
    this.#inprogress.forEach((item) => item.pause());
  }
  unpauseAll() {
    this.#inprogress.forEach((item) => item.unpause());
  }
  addItem() {
    const progress = new ProgVm();
    this.#inprogress.unshift(progress);
    this.#addProgress(progress);
  }
  #onTick(currentVal, currentOffset, targetVal) {
    if (currentVal < this.minBar) {
      currentVal = this.minBar;
    }
    if (targetVal > currentVal) {
      const diff = Math.min(targetVal - currentVal, this.maxGrowthPerTick);
      currentVal += diff;
      if (this.growthSpinRate) {
        currentOffset = (currentOffset + this.growthSpinRate) % 360;
      }
      this.#spinTickCount = 0;
    } else if (targetVal < currentVal && currentVal > this.minBar) {
      const diff = Math.min(currentVal - targetVal, this.maxCatchPerTick);
      currentVal = Math.max(currentVal - diff, this.minBar);
      const offset = (currentOffset + diff + this.catchSpinRate) % 360;
      currentOffset = offset;
      this.#spinTickCount = 0;
    } else if (currentVal < 360) {
      this.#spinTickCount++;
      if (this.#spinTickCount == this.spinTicks) {
        currentOffset = (currentOffset + this.spinRate) % 360;
        this.#spinTickCount = 0;
      }
    } else if (currentVal == 360 && currentOffset != 0) {
      currentOffset = 0;
    }
    return [currentVal, currentOffset];
  }
  unsubscribe() {
    this.#subscription.unsubscribe();
  }
};

// main.tsx
function Main(_props, { bindImmediateEffect, events }) {
  const { addItem, pauseAll, unpauseAll } = events;
  const bfDomAttach = events.attach;
  const vm = bfDomAttach.pipe(
    (0, import_rxjs3.switchMap)((element) => {
      return new import_rxjs3.Observable((subscriber) => {
        const dial = $(element);
        dial.knob({
          min: 0,
          max: 360,
          readOnly: true,
          displayInput: false
        });
        const vm2 = new CompRadProgVm(dial, (0, import_rxjs3.interval)(500));
        subscriber.next(vm2);
        return () => vm2.unsubscribe();
      });
    }),
    (0, import_operators3.tag)("vm"),
    (0, import_rxjs3.shareReplay)(1)
  );
  const targetPercent = vm.pipe((0, import_rxjs3.switchMap)((vm2) => vm2.targetPercent));
  const targetRoundPercent = vm.pipe(
    (0, import_rxjs3.switchMap)((vm2) => vm2.targetRoundPercent),
    (0, import_operators3.tag)("target-round-percent"),
    (0, import_rxjs3.shareReplay)(1)
  );
  bindImmediateEffect(
    addItem.pipe((0, import_rxjs3.withLatestFrom)(vm), (0, import_operators3.tag)("add-item")),
    ([, vm2]) => vm2.addItem()
  );
  bindImmediateEffect(
    pauseAll.pipe((0, import_rxjs3.withLatestFrom)(vm), (0, import_operators3.tag)("pause-all")),
    ([, vm2]) => vm2.unpauseAll()
  );
  bindImmediateEffect(
    unpauseAll.pipe((0, import_rxjs3.withLatestFrom)(vm), (0, import_operators3.tag)("unpause-all")),
    ([, vm2]) => vm2.unpauseAll()
  );
  const children = vm.pipe(
    (0, import_rxjs3.switchMap)((vm2) => vm2.progressAdded),
    (0, import_rxjs3.filter)((progVm) => progVm !== null),
    (0, import_rxjs3.map)((progVm) => () => /* @__PURE__ */ jsx(Progress, { item: progVm })),
    (0, import_operators3.tag)("children")
  );
  const menuIsActive = events.toggleMenu.pipe(
    (0, import_rxjs3.scan)((acc) => !acc, false),
    (0, import_rxjs3.shareReplay)(1)
  );
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("section", { class: "hero is-primary" }, /* @__PURE__ */ jsx("div", { class: "hero-head" }, /* @__PURE__ */ jsx("nav", { class: "navbar" }, /* @__PURE__ */ jsx("div", { class: "container" }, /* @__PURE__ */ jsx("div", { class: "navbar-brand" }, /* @__PURE__ */ jsx(
    "a",
    {
      class: "navbar-item",
      href: "https://worldmaker.net/compradprog/"
    },
    "CompRadProg"
  ), /* @__PURE__ */ jsx(
    "a",
    {
      role: "button",
      class: "navbar-burger",
      title: "menu",
      bind: {
        ariaExpanded: menuIsActive.pipe((0, import_rxjs3.map)((a) => a.toString()))
      },
      classBind: { "is-active": menuIsActive },
      events: { click: events.toggleMenu }
    },
    /* @__PURE__ */ jsx("span", null),
    /* @__PURE__ */ jsx("span", null),
    /* @__PURE__ */ jsx("span", null)
  )), /* @__PURE__ */ jsx(
    "div",
    {
      class: "navbar-menu",
      classBind: { "is-active": menuIsActive }
    },
    /* @__PURE__ */ jsx("div", { class: "navbar-end" }, /* @__PURE__ */ jsx(
      "a",
      {
        class: "navbar-item is-active",
        href: "https://worldmaker.net/compradprog/"
      },
      "Demo"
    ), /* @__PURE__ */ jsx(
      "a",
      {
        class: "navbar-item",
        href: "https://blog.worldmaker.net/2015/03/17/compradprog/"
      },
      "Motivation"
    ), /* @__PURE__ */ jsx("span", { class: "navbar-item" }, /* @__PURE__ */ jsx(
      "a",
      {
        class: "button is-primary is-inverted",
        href: "https://github.com/WorldMaker/compradprog/"
      },
      /* @__PURE__ */ jsx("span", { class: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: import_lucide.Github })),
      /* @__PURE__ */ jsx("span", null, "Source")
    )))
  )))), /* @__PURE__ */ jsx("div", { class: "hero-body" }, /* @__PURE__ */ jsx("div", { class: "container has-text-centered" }, /* @__PURE__ */ jsx("p", { class: "title" }, "Composite Radial Progress Demo"), /* @__PURE__ */ jsx("p", { class: "subtitle" }, "Visualize complex multi-item progress with a combined radial")))), /* @__PURE__ */ jsx("section", { class: "section" }, /* @__PURE__ */ jsx("div", { className: "dashboard" }, /* @__PURE__ */ jsx("div", { className: "dial" }, /* @__PURE__ */ jsx(
    "input",
    {
      type: "text",
      id: "dial",
      className: "dial",
      value: "0",
      events: { bfDomAttach }
    }
  ), /* @__PURE__ */ jsx("label", { htmlFor: "dial", className: "is-hidden" }, "Total Progress Dial")), /* @__PURE__ */ jsx("div", { className: "total" }, /* @__PURE__ */ jsx("div", { className: "level" }, /* @__PURE__ */ jsx("div", { className: "level-item" }, /* @__PURE__ */ jsx("div", null, /* @__PURE__ */ jsx("div", { className: "heading is-capitalized" }, "Total Progress"), /* @__PURE__ */ jsx(
    "div",
    {
      className: "title",
      bind: { innerText: targetRoundPercent }
    }
  ))), /* @__PURE__ */ jsx("div", { className: "level-item is-flex-grow-5" }, /* @__PURE__ */ jsx(
    "progress",
    {
      className: "progress is-info",
      bind: {
        innerText: targetRoundPercent,
        bfDelayValue: targetPercent
      }
    }
  ))), /* @__PURE__ */ jsx("div", { className: "level" }, /* @__PURE__ */ jsx("div", { className: "level-left" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "button",
      events: { click: addItem }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: import_lucide.Plus })),
    /* @__PURE__ */ jsx("span", null, "Add Item")
  )), /* @__PURE__ */ jsx("div", { className: "level-right" }, /* @__PURE__ */ jsx("div", { className: "buttons has-addons" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "button",
      title: "Pause All",
      events: { click: pauseAll }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: import_lucide.Pause })),
    /* @__PURE__ */ jsx("span", null, "All")
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "button",
      title: "Resume All",
      events: { click: unpauseAll }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: import_lucide.Play })),
    /* @__PURE__ */ jsx("span", null, "All")
  ))))), /* @__PURE__ */ jsx(
    "div",
    {
      className: "items",
      childrenBind: children,
      childrenBindMode: "prepend"
    }
  ))));
}
export {
  Main
};
