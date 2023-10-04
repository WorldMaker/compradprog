import assert from 'node:assert'
import { describe, it } from 'node:test'
import { ProgVm, BaseSpeed, SpeedMultiplier } from './progvm.js'

describe('ProgVm', () => {
    it('pauses', () => {
        const prog = new ProgVm()
        prog.pause()
        assert(prog.paused.peek())
    })

    it('unpauses', () => {
        const prog = new ProgVm()
        prog.pause()
        prog.unpause()
        assert(!prog.paused.peek())
    })

    it('speeds up', () => {
        const prog = new ProgVm()
        prog.speedUp()
        assert(prog.perTick.peek() === BaseSpeed * SpeedMultiplier)
    })

    it('slows down', () => {
        const prog = new ProgVm()
        prog.slowDown()
        assert(prog.perTick.peek() === BaseSpeed / SpeedMultiplier)
    })

    it('finishes', () => {
        const prog = new ProgVm()
        prog.finish()
        assert(prog.percent.peek() >= 1)
    })

    it('ticks forward', () => {
        const prog = new ProgVm()
        const start = prog.percent.peek()
        prog.tick()
        assert(prog.percent.peek() > start)
    })
})
