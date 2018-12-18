"use strict";

module.exports = api => {
  const env = api.env();

  const envOpts = {
    loose: true,
    modules: false
  };

  switch (env) {
    case "development":
      envOpts.debug = true;
      envOpts.targets = {
        node: "current"
      };
      break;
  }
  return {
    presets: [["@babel/preset-env"]],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties", { loose: false }],
      "@babel/plugin-proposal-json-strings"
    ]
  };
};