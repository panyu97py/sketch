/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import loadYogaImpl from '../binaries/yoga-base64-esm.js'
import loadYogaWasmImpl from '../binaries/yoga-wasm-base64-esm.js'
import wrapAssembly from './wrapAssembly.js'
export async function loadYoga () {
  const useWasm = process.env.YOGA_USE_WASM
  if (useWasm) return wrapAssembly(await loadYogaWasmImpl())
  return wrapAssembly(await loadYogaImpl())
}
export * from './generated/YGEnums.js'
