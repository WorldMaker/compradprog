import { run } from 'butterfloat'
import $ from 'jquery'
import { create } from 'rxjs-spy'
import { Main } from './main.js'

const spy = create()

// Set global for jquery-knob
const w = window as any
w.jQuery = w.$ = $

// @ts-ignore
await import('jquery-knob')

const container = document.getElementById('container')!
run(container, Main)
