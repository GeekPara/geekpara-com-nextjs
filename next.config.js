const path = require('path')

module.exports = {
  
  reactStrictMode: true,

  // sass support
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
