const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
    images: {
      domains: ['images.unsplash.com'],
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
}
