import path from 'path';

const pkgsPath = path.resolve(__dirname,"packages");
console.log(process.env.PKG)
const pkgPath = path.resolve(pkgsPath, process.env.PKG);
const resolve = p => path.resolve(pkgPath, p);

export default {
   root: pkgPath,
   publicDir: resolve("dist"),
   server: {
      port: 8889,
      hmr: true
   }
}