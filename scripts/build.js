const fs = require("fs");
const execa = require("execa");

const pkgs = fs.readdirSync("packages").filter(pkg => fs.statSync(fs).isDirectory());

const build = async pkg => {
    process.env.PKG = pkg;
    await execa('rollup', ["-c"], { stdio: "inherit" });
}

const runParallel = (pkgs, buildFn) => {
    for (const pkg of pkgs) {
        const p = buildFn(pkg);
    }
}

runParallel(pkgs, build);