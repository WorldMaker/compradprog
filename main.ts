import $ from 'jquery'
import { interval } from 'rxjs'
import { CompRadProgVm } from './compradprogvm'

// create and bind
const dial = $('#dial')

// Set global for jquery-knob
const w = window as any
w.jQuery = w.$ = $

// @ts-ignore
await import('jquery-knob')
dial.knob()
const vm = new CompRadProgVm(dial, interval(500))
//ko.applyBindings(vm)
