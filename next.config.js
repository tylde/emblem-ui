const withSass = require('@zeit/next-sass');

module.exports = withSass({
  experimental: {scss: true}
});
