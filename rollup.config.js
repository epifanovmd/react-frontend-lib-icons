import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import reactSvg from "rollup-plugin-react-svg";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "lib/index.mjs.js",
      format: "es",
      sourcemap: true,
    },
  ],
  external: [/node_modules/],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers", "babel-plugin-styled-components"],
    }),
    resolve(),
    commonjs(),
    postcss({
      extensions: ["css", "scss"],
      use: {
        sass: true,
      },
      plugins: [autoprefixer],
    }),
    terser(),
    reactSvg({
      // svgo options
      svgo: {
        plugins: [], // passed to svgo
        multipass: true,
      },

      // whether to output jsx
      jsx: false,

      // include: string
      include: null,

      // exclude: string
      exclude: null,
    }),
    typescript(),
  ],
};
