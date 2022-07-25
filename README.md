# 测试短代码 (js && ts) 的项目模板

## about（关于）

作用：可以用来运行、测试js与ts代码

<br>

项目初衷是希望可以快速地运行ts代码，同时能够方便地对leetcode代码进行本地测试

<br>

以 `vite` 框架 + `vitest` 框架为基础，去除页面框架部分，只保留测试功能，便于测试短代码。同时使用vite自带的esbuild对ts代码进行编译。
具体使用可以参考[vitest官网](https://cn.vitest.dev/)

## use（使用方式）

### 安装

``` bash
yarn
```

### 验证能否使用

#### 验证运行ts代码功能

```bash
yarn ts 20.ts

or

npm run ts 20.ts
```

此时将会出现 `20.ts` 的运行结果为 `true 4`

#### 验证测试功能

```bash
yarn test
```

此时将会自动测试`src/code/`目录下的 `20.ts` 文件和 `code/__test__` 目录下的 `20.test.ts` 文件，并显示测试通过

### 运行与测试代码

#### 运行代码

默认情况下，命令 `yarn ts xxx.ts` 是以 `src/code` 为基准下的文件，当你想运行名称为 `src/code/test.ts` 的代码，直接输入 `yarn ts test.ts` 即可，如果想要运行路径为 `src/code/foo/test.ts` 或是 `src/code/one/two/test.js` 的代码，他们对应的命令应该是 `yarn ts /foo/test.ts /one/two/test.js` （没错，支持同时运行多个代码），如果想要修改基准路径，可以修改 `src/bin/constants.js` 文件

#### 编译代码

如果只希望编译代码，而不运行。可以使用 `yarn build xxx.ts` 命令，用法和 `ts` 类似，同样可以一次编译多个代码。编译生成的代码在和scr平级的dist目录下（运行后dist目录会自动生成）不论是 `ts` 还是 `build` 命令都会生成编译后的代码文件

#### 内联代码测试

默认情况下，运行 `yarn test` 只会测试 `src/code/` 文件夹中的文件，如果要更改测试目录，请更改 `vite.config.ts` 文件中的 `includeSource` 参数
写法参考官网和示例代码`src/code/20.ts`

#### 单独文件普通测试

建议写在 `__test__` 目录下，并且命名为 `xxx.test.ts` 的格式，这样vitest在模糊搜索时会匹配该文件。使用时需要导入被测的函数（内联测试可以不需要）。

#### 测试某个文件代码

如果你的文件名为 `20.ts` 可以使用命令 `yarn test 20` 来测试指定文件。需要注意的是，这时候 `2020.ts` 也会被匹配上
