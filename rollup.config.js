import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import reactSvg from "rollup-plugin-react-svg";
import pkg from "./package.json" assert { type: "json" };

const plugins = [
  external(),
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    plugins: ["external-helpers"],
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
    svgo: {
      plugins: [],
      multipass: true,
    },
    jsx: false,
    include: null,
    exclude: null,
  }),
];

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "lib/cjs",
      format: "cjs",
      preserveModules: true,
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      ...plugins,
      typescript({ tsconfig: "tsconfig.cjs.json", sourceMap: false }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "lib/esm",
      format: "es",
      preserveModules: true,
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      ...plugins,
      typescript({ tsconfig: "tsconfig.mjs.json", sourceMap: false }),
    ],
  },
];
