// automatic strict mode

import { name, ft1 } from './lib/t1.js'

console.log(`browser_main.js - fro lib ${name} has ft1(2): ${ft1(2)}`)

const e = document.getElementById('intro')
e.innerHTML = `set from main.js module: ${ft1(4)}`


