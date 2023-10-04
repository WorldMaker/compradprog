import assert from 'node:assert'
import { describe, it } from 'node:test'
import { CompRadProgVm } from './compradprogvm.js'

describe('CompRadProgVm', () => {
    it('adds items', () => {
        const vm = new CompRadProgVm()
        const startlength = vm.inprogress().length
        vm.addItem()
        assert(vm.inprogress().length > startlength)
    })

    it('pauses all', () => {
        const vm = new CompRadProgVm()
        vm.addItem()
        vm.addItem()
        vm.pauseAll()
        assert(vm.inprogress().every(prog => prog.paused.peek()))
    })

    it('unpauses all', () => {
        const vm = new CompRadProgVm()
        vm.addItem()
        vm.addItem()
        vm.pauseAll()
        vm.unpauseAll()
        assert(vm.inprogress().every(prog => !prog.paused.peek()))
    })

    it('ticks forward', () => {
        const vm = new CompRadProgVm()
        vm.addItem()
        vm.addItem()
        const startProgress = vm.currentVal.peek()
        vm.tick()
        assert(vm.currentVal.peek() > startProgress)
    })
})
