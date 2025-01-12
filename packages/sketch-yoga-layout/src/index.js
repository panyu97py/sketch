const useWasm = process.env.YOGA_USE_WASM
if (useWasm) {
  module.exports = require('./load-use-wasm')
} else {
  module.exports = require('./load-no-wasm')
}
