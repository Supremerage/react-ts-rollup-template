/* eslint-disable no-undef */
import { defineConfig } from "rollup";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs-alternate";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import babel from "@rollup/plugin-babel";
import static_files from "rollup-plugin-static-files";
import { terser } from "rollup-plugin-terser";
import refresh from "rollup-plugin-react-refresh";
import hotcss from "rollup-plugin-hot-css";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";

let config = defineConfig({
  input: "./src/index.tsx",
  output: {
    dir: "build",
    format: "esm",
    entryFileNames: "[name].[hash].js",
    assetFileNames: "[name].[hash][extname]",
    sourcemap: process.env.NODE_ENV === "development"
  },
  plugins: [
    resolve(),
    url(),
    svgr(),
    image(),
    hotcss({
      hot: process.env.NODE_ENV === "development",
      file: "styles.css",
      loaders: ["scss"],
      extensions: [".css", ".scss"],
    }),
    typescript({
      refresh: true,
    }),
    babel({
      babelHelpers: "runtime",
      exclude: ["node_modules/**/*"],
      extensions: [
        ...DEFAULT_EXTENSIONS,
        ".ts",
        ".tsx"
      ]
    }),
    commonjs({
      define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    }),
    process.env.NODE_ENV === "development" && refresh(),
  ]
});

if (process.env.NODE_ENV === "production") {
  config.plugins = config.plugins.concat([
    static_files({
      include: ["./public"]
    }),
    terser({
      compress: {
        global_defs: {
          module: false
        }
      }
    })
  ]);
}

export default config;
