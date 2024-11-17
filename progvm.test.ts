import { equal, notEqual, ok } from 'node:assert/strict'
import { describe, it } from 'node:test'
import { firstValueFrom } from 'rxjs'
import { ProgVm, BaseSpeed, SpeedMultiplier } from './progvm.js'

describe('ProgVm', () => {
  it('pauses', async () => {
    const prog = new ProgVm()
    prog.pause()
    const paused = await firstValueFrom(prog.paused)
    equal(paused, true)
  })

  it('unpauses', async () => {
    const prog = new ProgVm()
    prog.pause()
    prog.unpause()
    const paused = await firstValueFrom(prog.paused)
    equal(paused, false)
  })

  it('speeds up', async () => {
    const prog = new ProgVm()
    prog.speedUp()
    const perTick = await firstValueFrom(prog.perTick)
    equal(perTick, BaseSpeed * SpeedMultiplier)
  })

  it('slows down', async () => {
    const prog = new ProgVm()
    prog.slowDown()
    const perTick = await firstValueFrom(prog.perTick)
    equal(perTick, BaseSpeed / SpeedMultiplier)
  })

  it('finishes', async () => {
    const prog = new ProgVm()
    prog.finish()
    const percent = await firstValueFrom(prog.percent)
    equal(percent, 1)
  })

  it('ticks forward', async () => {
    const prog = new ProgVm()
    const start = await firstValueFrom(prog.percent)
    await prog.tick()
    const end = await firstValueFrom(prog.percent)
    notEqual(start, end)
    ok(end > start)
  })
})
