import "./chunk-BYXBJQAS.js";
import {
  ProgVm
} from "./chunk-MH565JGM.js";
import {
  Icon,
  Progress,
  buildStamp,
  makeTestComponentContext,
  makeTestEvent,
  require_lucide
} from "./chunk-HZ7TX3P3.js";
import {
  __toESM,
  require_cjs
} from "./chunk-QC5UYQHG.js";

// _stamp.ts
var import_lucide = __toESM(require_lucide(), 1);
import { JSDOM } from "jsdom";
import { writeFile } from "node:fs/promises";
var import_rxjs = __toESM(require_cjs(), 1);
var dom = new JSDOM(`
    <!doctype html>
    <html>
        <head>
            <title>Composite Radial Progress Demo</title>
            <link rel="stylesheet" href="index.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script type="module" src="index-stamp.js"></script>
        </head>

        <body id="container"></body>
    </html>
`);
var { window } = dom;
globalThis.window = window;
var { document } = window;
globalThis.document = document;
var jQuery = function() {
};
jQuery.fn = {};
globalThis.jQuery = jQuery;
var container = document.getElementById("container");
var { context: testMainContext } = makeTestComponentContext({
  addItem: makeTestEvent(import_rxjs.NEVER),
  toggleMenu: makeTestEvent(import_rxjs.NEVER),
  attach: makeTestEvent(import_rxjs.NEVER),
  pauseAll: makeTestEvent(import_rxjs.NEVER),
  unpauseAll: makeTestEvent(import_rxjs.NEVER)
});
var { Main } = await import("./main-JAJ5BKPX.js");
var mainTree = Main({}, testMainContext);
var mainStamp = buildStamp(mainTree, document);
container.append(mainStamp.content);
function appendStamp(stamp) {
  container.append(stamp);
}
var githubIconStamp = buildStamp(Icon({ icon: import_lucide.Github }), document);
githubIconStamp.id = "icon-github";
appendStamp(githubIconStamp);
var pauseIconStamp = buildStamp(Icon({ icon: import_lucide.Pause }), document);
pauseIconStamp.id = "icon-pause";
appendStamp(pauseIconStamp);
var playIconStamp = buildStamp(Icon({ icon: import_lucide.Play }), document);
playIconStamp.id = "icon-play";
appendStamp(playIconStamp);
var plusIconStamp = buildStamp(Icon({ icon: import_lucide.Plus }), document);
plusIconStamp.id = "icon-plus";
appendStamp(plusIconStamp);
var ffIconStamp = buildStamp(Icon({ icon: import_lucide.FastForward }), document);
ffIconStamp.id = "icon-fast-forward";
appendStamp(ffIconStamp);
var rwIconStamp = buildStamp(Icon({ icon: import_lucide.Rewind }), document);
rwIconStamp.id = "icon-rewind";
appendStamp(rwIconStamp);
var skipIconStamp = buildStamp(Icon({ icon: import_lucide.SkipForward }), document);
skipIconStamp.id = "icon-skip-forward";
appendStamp(skipIconStamp);
var { context: testProgressContext } = makeTestComponentContext({
  finish: makeTestEvent(import_rxjs.NEVER),
  pause: makeTestEvent(import_rxjs.NEVER),
  slowDown: makeTestEvent(import_rxjs.NEVER),
  speedUp: makeTestEvent(import_rxjs.NEVER),
  unpause: makeTestEvent(import_rxjs.NEVER)
});
var progressTree = Progress({ item: new ProgVm() }, testProgressContext);
var progressStamp = buildStamp(progressTree, document);
progressStamp.id = "progress";
appendStamp(progressStamp);
await writeFile("index.html", dom.serialize());
