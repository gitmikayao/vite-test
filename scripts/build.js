const fs = require("fs");
const execa = require("execa");

const pkgs = fs.readdirSync("packages").filter(pkg => fs.statSync(`packages/${pkg}`).isDirectory());

const build = async pkg => {
    process.env.PKG = pkg;
    await execa('rollup', ["-c"], { stdio: "inherit" });
}

const runParallel = (pkgs, buildFn) => {
    const res = [];
    for (const pkg of pkgs) {
        const p = buildFn(pkg);
        res.push(p);
    }

    return Promise.all(res);
}

runParallel(pkgs, build);