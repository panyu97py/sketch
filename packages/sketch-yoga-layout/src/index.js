import { loadYoga as loadUseWasm } from './load-use-wasm'
import { loadYoga as loadNoWasm } from './load-no-wasm'
export const loadYoga = process.env.YOGA_USE_WASM ? loadUseWasm : loadNoWasm
export * from './generated/YGEnums'
