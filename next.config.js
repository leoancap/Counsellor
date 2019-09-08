const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const path = require("path");

module.exports = withFonts(
  withCSS({
    webpack(config) {
      // Add absolute import
      config.resolve.modules.push(path.resolve("./"));
      return config;
    },
  }),
);
