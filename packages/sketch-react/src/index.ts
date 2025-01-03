export * from './types'

if (process.env.SKETCH_PLATFORM === 'APPLET') {
  module.exports = require('./platform-applet')
} else if (process.env.SKETCH_PLATFORM === 'WEB') {
  module.exports = require('./platform-web')
} else {
  module.exports = {}
}
