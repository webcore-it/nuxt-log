const path = require('path');

module.exports = function nuxtLogger(moduleOptions) {
  const options = Object.assign({}, this.options.nuxtLogger, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: false,
    fileName: 'logger.js',
    options,
  });
};

module.exports.meta = require('./package.json');