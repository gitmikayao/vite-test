const fs = require("fs");
const execa = require("execa");
console.log(111111)

const pkgs = fs.readdirSync("packages")
    .filter(pkg => fs.statSync(`packages/${pkg}`).isDirectory());

const build = async pkg => {
    process.env.PKG = pkg;
    await execa('vite', ["serve"], { stdio: "inherit" });
}
build("demo");


// const runParallel = (pkgs, buildFn) => {
//     for (const pkg of pkgs) {
//         const p = buildFn(pkg);
//     }
// }

// runParallel(pkgs, build);