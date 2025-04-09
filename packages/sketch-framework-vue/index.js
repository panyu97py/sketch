if (process.env.SKETCH_PLATFORM === 'APPLET') {
  module.exports = require('./dist/platform-applet/index.js')
} else if (process.env.SKETCH_PLATFORM === 'WEB') {
  module.exports = require('./dist/platform-web/index.js')
} else {
  module.exports = require('./dist/platform-web/index.js')
}
