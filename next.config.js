const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }// ,
  // target: 'serverless'
});
