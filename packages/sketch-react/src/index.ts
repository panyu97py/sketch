if (process.env.SKETCH_PLATFORM === 'APPLET') {
  module.exports = require('./platform-applet')
} else if (process.env.SKETCH_PLATFORM === 'H5') {
  module.exports = require('./platform-web')
} else {
  console.warn('No matching platform')
}
