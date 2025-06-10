import {
  BaseSpeed,
  ProgVm,
  SpeedMultiplier,
  __toESM,
  require_cjs
} from "./chunk-2UASDXKQ.js";

// progvm.test.ts
var import_rxjs = __toESM(require_cjs(), 1);
import { equal, notEqual, ok } from "node:assert/strict";
import { describe, it } from "node:test";
describe("ProgVm", () => {
  it("pauses", async () => {
    const prog = new ProgVm();
    prog.pause();
    const paused = await (0, import_rxjs.firstValueFrom)(prog.paused);
    equal(paused, true);
  });
  it("unpauses", async () => {
    const prog = new ProgVm();
    prog.pause();
    prog.unpause();
    const paused = await (0, import_rxjs.firstValueFrom)(prog.paused);
    equal(paused, false);
  });
  it("speeds up", async () => {
    const prog = new ProgVm();
    prog.speedUp();
    const perTick = await (0, import_rxjs.firstValueFrom)(prog.perTick);
    equal(perTick, BaseSpeed * SpeedMultiplier);
  });
  it("slows down", async () => {
    const prog = new ProgVm();
    prog.slowDown();
    const perTick = await (0, import_rxjs.firstValueFrom)(prog.perTick);
    equal(perTick, BaseSpeed / SpeedMultiplier);
  });
  it("finishes", async () => {
    const prog = new ProgVm();
    prog.finish();
    const percent = await (0, import_rxjs.firstValueFrom)(prog.percent);
    equal(percent, 1);
  });
  it("ticks forward", async () => {
    const prog = new ProgVm();
    const start = await (0, import_rxjs.firstValueFrom)(prog.percent);
    await prog.tick();
    const end = await (0, import_rxjs.firstValueFrom)(prog.percent);
    notEqual(start, end);
    ok(end > start);
  });
});
