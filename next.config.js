const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS({
  webpack(config) {
    // Add absolute import
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
