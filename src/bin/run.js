const args = process.argv.slice(2);
// console.log('process.argv：\n', process.argv)
// console.log('参数：\n', args)

const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");
const { BASE_PATH } = require("./constants");
const findRealFileName = (inputFileName, dirList) =>
  dirList.find(
    (x) => x.indexOf(inputFileName) !== -1 && x[0] === inputFileName[0]
  );

try {
  if (args.length >= 1) {
    for (let arg of args) {
      let fullFileNamePath = path.resolve(BASE_PATH, arg);
      const inputFileName = arg.split("/").at(-1);
      const preDir = fullFileNamePath
        .split(path.sep)
        .slice(0, -1)
        .join(path.sep);
      const dirList = fs.readdirSync(preDir);
      const tsRealFileName = findRealFileName(inputFileName, dirList);
      if (!tsRealFileName) {
        throw new Error(
          `输入的文件名不正确，文件${arg}.ts、${arg}.js、${arg}*.ts、${arg}*.js不存在`
        );
      } else {
        fullFileNamePath = path.resolve(preDir, tsRealFileName);
      }

      esbuild.buildSync({
        entryPoints: [fullFileNamePath],
        outfile: `dist/${arg}.js`,
        bundle: true,
        format: "cjs",
        minify: true,
      });
      const js_code = fs.readFileSync(`dist/${arg}.js`, "utf-8");
      console.log(
        `\n--------------------${tsRealFileName}--------------------`
      );
      eval(js_code);
      console.log(
        `--------------------${tsRealFileName}--------------------\n`
      );
    }
  } else {
    throw new Error("没有指定文件");
  }
} catch (err) {
  console.log("代码未成功运行！");
  console.log(err);
}
