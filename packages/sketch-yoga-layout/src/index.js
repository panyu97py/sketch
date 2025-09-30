const useWasm = process.env.YOGA_USE_WASM
module.exports = useWasm ? require('./load-use-wasm') : require('./load-no-wasm')
module.exports.default = module.exports
