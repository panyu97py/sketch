if (process.env.SKETCH_PLATFORM === 'APPLET') {
  module.exports = require('./applet')
} else if (process.env.SKETCH_PLATFORM === 'H5') {
  module.exports = require('./h5')
} else {
  console.warn('No matching platform')
}
