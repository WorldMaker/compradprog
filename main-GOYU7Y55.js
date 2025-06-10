import {
  CompRadProgVm
} from "./chunk-IGQWQIZX.js";
import {
  Icon,
  Progress,
  require_lucide
} from "./chunk-W7ZSPGI2.js";
import {
  Fragment,
  __toESM,
  jsx,
  require_cjs,
  require_operators
} from "./chunk-2UASDXKQ.js";

// main.tsx
var import_lucide = __toESM(require_lucide(), 1);
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
function Main(_props, { bindImmediateEffect, events }) {
  const { addItem, attach, pauseAll, unpauseAll } = events;
  const vm = new CompRadProgVm((0, import_rxjs.interval)(500));
  const { targetPercent, targetRoundPercent, currentOffset, currentVal } = vm;
  const angleClass = currentOffset.pipe(
    (0, import_rxjs.map)((offset) => `angle-${offset}`),
    (0, import_operators.tag)("angle-class")
  );
  const currentValueStyle = currentVal.pipe(
    (0, import_rxjs.map)((val) => `--o-progress: ${val};`),
    (0, import_operators.tag)("current-value-style")
  );
  bindImmediateEffect(addItem, () => vm.addItem());
  bindImmediateEffect(attach, (el) => {
    el.setAttribute("max", "360");
  });
  bindImmediateEffect(pauseAll, () => vm.unpauseAll());
  bindImmediateEffect(unpauseAll, () => vm.unpauseAll());
  const children = vm.progressAdded.pipe(
    (0, import_rxjs.filter)((progVm) => progVm !== null),
    (0, import_rxjs.map)((progVm) => () => /* @__PURE__ */ jsx(Progress, { item: progVm })),
    (0, import_operators.tag)("children")
  );
  const menuIsActive = events.toggleMenu.pipe(
    (0, import_rxjs.scan)((acc) => !acc, false),
    (0, import_rxjs.shareReplay)(1)
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
        ariaExpanded: menuIsActive.pipe((0, import_rxjs.map)((a) => a.toString()))
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
  )))), /* @__PURE__ */ jsx("div", { class: "hero-body" }, /* @__PURE__ */ jsx("div", { class: "container has-text-centered" }, /* @__PURE__ */ jsx("p", { class: "title" }, "Composite Radial Progress Demo"), /* @__PURE__ */ jsx("p", { class: "subtitle" }, "Visualize complex multi-item progress with a combined radial")))), /* @__PURE__ */ jsx("section", { class: "section" }, /* @__PURE__ */ jsx("div", { class: "dashboard" }, /* @__PURE__ */ jsx("div", { class: "bigbang dial" }, /* @__PURE__ */ jsx("div", { class: "gravity-spot" }, /* @__PURE__ */ jsx("div", { class: "orbit-4" }, /* @__PURE__ */ jsx(
    "o-progress",
    {
      shape: "circle",
      bind: {
        /* can't bind to o-progress `value` because attribute not property, can't use styleBind because variable not a property */
        style: currentValueStyle,
        /* can't use classBind because "dynamic" class name */
        className: angleClass
      },
      events: { bfDomAttach: attach }
    }
  )), /* @__PURE__ */ jsx("div", { class: "orbit-0" }, /* @__PURE__ */ jsx("div", { class: "satellite" }, /* @__PURE__ */ jsx(
    "div",
    {
      class: "capsule",
      bind: { innerText: targetRoundPercent }
    }
  ))))), /* @__PURE__ */ jsx("div", { className: "total" }, /* @__PURE__ */ jsx("div", { className: "level" }, /* @__PURE__ */ jsx("div", { className: "level-item" }, /* @__PURE__ */ jsx("div", null, /* @__PURE__ */ jsx("div", { className: "heading is-capitalized" }, "Total Progress"), /* @__PURE__ */ jsx(
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
