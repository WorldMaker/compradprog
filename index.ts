import { run } from 'butterfloat'
import { create } from 'rxjs-spy'
import { Main } from './main.js'
import '@zumer/orbit'

const spy = create()

const container = document.getElementById('container')!
run(container, Main)
