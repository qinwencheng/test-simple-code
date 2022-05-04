const args = process.argv.slice(2);
// console.log('process.argv：\n', process.argv)
// console.log('参数：\n', args)

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { BASE_PATH } = require('./constants')

try {
  if (args.length >= 1) {
    for (let arg of args) {
      const nowPath = path.resolve(BASE_PATH, arg);
      fs.access(nowPath, (err) => {
        if (err) {
          throw new Error('文件不存在');
        }
      });
      esbuild.buildSync({
        entryPoints: [nowPath],
        outfile: `dist/${arg}.js`,
        bundle: true,
        format: 'cjs',
        minify: true
      })
      const js_code = fs.readFileSync(`dist/${arg}.js`, 'utf-8');
      console.log(`\n--------------------${arg}--------------------`);
      eval(js_code);
      console.log(`--------------------${arg}--------------------\n`);
    }
  } else {
    throw new Error('没有指定文件');
  }

} catch (err) {
  console.log('代码未成功运行！')
  console.log(err);
}

