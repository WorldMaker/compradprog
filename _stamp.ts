import {
  buildStamp,
  makeTestComponentContext,
  makeTestEvent,
} from 'butterfloat'
import { JSDOM } from 'jsdom'
import {
  FastForward,
  Github,
  Pause,
  Play,
  Plus,
  Rewind,
  SkipForward,
} from 'lucide'
import { writeFile } from 'node:fs/promises'
import { Icon } from './icon.js'
import { NEVER } from 'rxjs'
import { Progress } from './progress.js'
import { ProgVm } from './progvm.js'

const dom = new JSDOM(`
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
`)
const { window } = dom
;(globalThis as any).window = window
const { document } = window
;(globalThis as any).document = document
const jQuery: any = function () {}
jQuery.fn = {}
;(globalThis as any).jQuery = jQuery
const container = document.getElementById('container')!

// *** Main (prestamp) ***

const { context: testMainContext } = makeTestComponentContext({
  addItem: makeTestEvent<MouseEvent>(NEVER),
  toggleMenu: makeTestEvent<MouseEvent>(NEVER),
  attach: makeTestEvent<HTMLElement>(NEVER),
  pauseAll: makeTestEvent<MouseEvent>(NEVER),
  unpauseAll: makeTestEvent<MouseEvent>(NEVER),
})
// imported late to set globalThis.window above
const { Main } = await import('./main.js')
const mainTree = Main({}, testMainContext)
const mainStamp = buildStamp(mainTree, document)
container.append(mainStamp.content)

function appendStamp(stamp: HTMLTemplateElement) {
  container.append(stamp)
}

// *** Icon stamps ***

const githubIconStamp = buildStamp(Icon({ icon: Github }), document)
githubIconStamp.id = 'icon-github'
appendStamp(githubIconStamp)
const pauseIconStamp = buildStamp(Icon({ icon: Pause }), document)
pauseIconStamp.id = 'icon-pause'
appendStamp(pauseIconStamp)
const playIconStamp = buildStamp(Icon({ icon: Play }), document)
playIconStamp.id = 'icon-play'
appendStamp(playIconStamp)
const plusIconStamp = buildStamp(Icon({ icon: Plus }), document)
plusIconStamp.id = 'icon-plus'
appendStamp(plusIconStamp)
const ffIconStamp = buildStamp(Icon({ icon: FastForward }), document)
ffIconStamp.id = 'icon-fast-forward'
appendStamp(ffIconStamp)
const rwIconStamp = buildStamp(Icon({ icon: Rewind }), document)
rwIconStamp.id = 'icon-rewind'
appendStamp(rwIconStamp)
const skipIconStamp = buildStamp(Icon({ icon: SkipForward }), document)
skipIconStamp.id = 'icon-skip-forward'
appendStamp(skipIconStamp)

// *** Progress stamp ***

const { context: testProgressContext } = makeTestComponentContext({
  finish: makeTestEvent<MouseEvent>(NEVER),
  pause: makeTestEvent<MouseEvent>(NEVER),
  slowDown: makeTestEvent<MouseEvent>(NEVER),
  speedUp: makeTestEvent<MouseEvent>(NEVER),
  unpause: makeTestEvent<MouseEvent>(NEVER),
})
const progressTree = Progress({ item: new ProgVm() }, testProgressContext)
const progressStamp = buildStamp(progressTree, document)
progressStamp.id = 'progress'
appendStamp(progressStamp)

// *** Serialize to HTML ***

await writeFile('index.html', dom.serialize())
