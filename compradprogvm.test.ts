import { deepEqual, ok } from 'node:assert/strict'
import { describe, it } from 'node:test'
import { firstValueFrom, take, toArray } from 'rxjs'
import { TestScheduler } from 'rxjs/testing'
import { CompRadProgVm } from './compradprogvm.js'

describe('CompRadProgVm', () => {
  it('adds items', () => {
    const vm = new CompRadProgVm()
    const startlength = vm.progressCount
    vm.addItem()
    ok(vm.progressCount > startlength)
  })

  it('pauses all', async () => {
    const vm = new CompRadProgVm()
    vm.addItem()
    vm.addItem()
    vm.pauseAll()
    const paused = await firstValueFrom(vm.pausedStatus)
    ok(paused.every((paused) => paused))
  })

  it('unpauses all', async () => {
    const vm = new CompRadProgVm()
    vm.addItem()
    vm.addItem()
    vm.pauseAll()
    vm.unpauseAll()
    const paused = await firstValueFrom(vm.pausedStatus)
    ok(paused.every((paused) => !paused))
  })

  it.skip('ticks forward', async () => {
    // Test doesn't work because tick operations have embedded promises to update ProgVm ticks
    const testScheduler = new TestScheduler((actual, expected) =>
      deepEqual(actual, expected),
    )
    testScheduler.run(({ cold, expectObservable }) => {
      const ticks = cold('--x--x')
      const expected = '  a-b--c'
      const expectedValues = {
        a: 0,
        b: 1,
        c: 1,
      }
      const vm = new CompRadProgVm(ticks)
      vm.addItem()
      vm.addItem()
      expectObservable(vm.currentVal).toBe(expected, expectedValues)
    })
  })
})
