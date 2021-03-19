console.log(1111111111111111111111111111)

import path from 'path';
import babel from '@rollup/plugin-babel';
import resolvePlugin from '@rollup/plugin-node-resolve';
import typescript2 from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import { terser } from 'rollup-plugin-terser';


const pkgsPath = path.resolve(__dirname, "packages");
console.log(process.env.PKG)
const pkgPath = path.resolve(pkgsPath, process.env.PKG);
const resolve = p => path.resolve(pkgPath, p);

const pkgJson = require(resolve("package.json"));
const name = path.basename(pkgPath);
const options = pkgJson.buildOptions;
const createConfig = (format) => {
  return {
    input: resolve(`src/index.ts`),
    output: {
      file: resolve(`dist/${name}.${format}.js`),
      format,
      name
    },
    plugins: [
      clear({
        targets: [resolve(`dist/${name}.${format}.js`)],
        watch: true
      }),
      typescript2(),
      resolvePlugin(),
      babel({
        babelHelpers: "bundled"
      }),
      terser()
    ]
  }
};

export default options.formats.map(format => createConfig(format));
