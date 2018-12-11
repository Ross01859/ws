"use strict";
module.exports = {
  baseUrl: "./",
  outputDir: "dist/blog",
  lintOnSave: true,
  devServer: {
    port: 8888,
    // host: "localhost",
    https: false,
    open: true,
    overlay: {
      warning: true,
      errors: true
    }
  }
};
