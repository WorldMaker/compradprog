import { Component, runStamps, StampCollection } from 'butterfloat'
import $ from 'jquery'
import {
  FastForward,
  Github,
  Pause,
  Play,
  Plus,
  Rewind,
  SkipForward,
} from 'lucide'
import { create } from 'rxjs-spy'
import { Icon } from './icon.js'
import { Main } from './main.js'
import { Progress } from './progress.js'

const spy = create()

// Set global for jquery-knob
const w = window as any
w.jQuery = w.$ = $

// @ts-ignore
await import('jquery-knob')

const container = document.getElementById('container')!

class DebugStampCollection extends StampCollection {
  getStamp(c: Component, properties: unknown): HTMLTemplateElement | undefined {
    const stamp = super.getStamp(c, properties)
    console.log(stamp, c, properties)
    return stamp
  }
}

const stamps = new DebugStampCollection()
stamps.registerPrestamp(Main, container)

stamps.registerOnlyStamp(
  Progress,
  document.getElementById('progress') as HTMLTemplateElement,
)

stamps.registerStampAlternative(
  Icon,
  ({ icon }) => icon == Github,
  document.getElementById('icon-github') as HTMLTemplateElement,
)
stamps.registerStampAlternative(
  Icon,
  ({ icon }) => icon == Pause,
  document.getElementById('icon-pause') as HTMLTemplateElement,
)
stamps.registerStampAlternative(
  Icon,
  ({ icon }) => icon == Play,
  document.getElementById('icon-play') as HTMLTemplateElement,
)
stamps.registerStampAlternative(
  Icon,
  ({ icon }) => icon == Plus,
  document.getElementById('icon-plus') as HTMLTemplateElement,
)
stamps.registerStampAlternative(
  Icon,
  ({ icon }) => icon == FastForward,
  document.getElementById('icon-fast-forward') as HTMLTemplateElement,
)
stamps.registerStampAlternative(
  Icon,
  ({ icon }) => icon == Rewind,
  document.getElementById('icon-rewind') as HTMLTemplateElement,
)
stamps.registerStampAlternative(
  Icon,
  ({ icon }) => icon == SkipForward,
  document.getElementById('icon-skip-forward') as HTMLTemplateElement,
)

runStamps(container, Main, stamps)
