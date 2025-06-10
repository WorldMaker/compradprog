import { runStamps, StampCollection } from 'butterfloat'
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
import '@zumer/orbit'

const spy = create()

const container = document.getElementById('container')!

const stamps = new StampCollection()
stamps
  .registerPrestamp(Main, container)
  .registerOnlyStamp(
    Progress,
    document.querySelector<HTMLTemplateElement>('#progress')!,
  )
  .registerStampAlternative(
    Icon,
    ({ icon }) => icon == Github,
    document.querySelector<HTMLTemplateElement>('#icon-github')!,
  )
  .registerStampAlternative(
    Icon,
    ({ icon }) => icon == Pause,
    document.querySelector<HTMLTemplateElement>('#icon-pause')!,
  )
  .registerStampAlternative(
    Icon,
    ({ icon }) => icon == Play,
    document.querySelector<HTMLTemplateElement>('#icon-play')!,
  )
  .registerStampAlternative(
    Icon,
    ({ icon }) => icon == Plus,
    document.querySelector<HTMLTemplateElement>('#icon-plus')!,
  )
  .registerStampAlternative(
    Icon,
    ({ icon }) => icon == FastForward,
    document.querySelector<HTMLTemplateElement>('#icon-fast-forward')!,
  )
  .registerStampAlternative(
    Icon,
    ({ icon }) => icon == Rewind,
    document.querySelector<HTMLTemplateElement>('#icon-rewind')!,
  )
  .registerStampAlternative(
    Icon,
    ({ icon }) => icon == SkipForward,
    document.querySelector<HTMLTemplateElement>('#icon-skip-forward')!,
  )

runStamps(container, Main, stamps)
