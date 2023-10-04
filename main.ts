import * as ko from 'knockout'
import $ from 'jquery'
import { CompRadProgVm } from './compradprogvm'

// create and bind
const dial = $('#dial')

// Set global for jquery-knob
const w = window as any
w.jQuery = w.$ = $

// @ts-ignore
await import('jquery-knob')
dial.knob()
const vm = new CompRadProgVm(dial)
ko.applyBindings(vm)
setInterval(() => vm.tick(), 500)
