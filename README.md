
<div align=center>
<br />
<br />
<br />
<img src="https://raw.githubusercontent.com/JofunLiang/usuallyjs/dev/logo.png" alt="usuallyjs"/>
<br />
<br />
<br />
<a href="https://www.npmjs.com/package/usuallyjs">
  <img src="https://img.shields.io/npm/v/usuallyjs.svg" alt="npm"/>
</a>
<a href="https://github.com/JofunLiang/usuallyjs/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/jofunliang/usuallyjs.svg" alt="license"/>
</a>
<a href="https://www.npmjs.com/package/usuallyjs">
  <img src="https://img.shields.io/npm/dm/usuallyjs.svg" alt="downloads"/>
</a>
<a href="https://github.com/JofunLiang/usuallyjs/blob/master/dist/usually.min.js">
  <img src="https://img.shields.io/github/size/jofunliang/usuallyjs/dist/usually.min.js.svg?label=minified%20size" alt="GitHub file size in bytes"/>
</a>
<br />
<a href="https://jofunliang.github.io/usuallyjs/">
  <img src="https://img.shields.io/badge/docs-%E6%96%87%E6%A1%A3-brightgreen.svg" alt="文档"/>
</a>
<br />
<br />
一个面向现代 Web 开发的 JavaScript 函数库。
<br />
<br />
<a href="https://github.com/JofunLiang/usuallyjs">
  <img src="https://img.shields.io/github/forks/jofunliang/usuallyjs.svg?style=social" alt="GitHub forks"/>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://jofunliang.github.io/usuallyjs/">
  <img src="https://img.shields.io/github/stars/jofunliang/usuallyjs.svg?style=social" alt="GitHub stars"/>
</a>
<br />
<br />
<a href="https://jofunliang.github.io/usuallyjs/">中文文档</a>
</div>


# 简介

usuallyjs 基于 ES6 开发，抛弃了传统 Web 开发中 DOM 和 BOM 操作部分的内容，精选了一系列 Web 开发过程中最常用的、最实用的 JavaScript 函数。与 Vue、React、Angular等现代 Web 框架搭配使用，更好的服务于开发现代 Web 应用。

# 安装和使用

### npm安装和使用

通过 npm 使用如下命令安装：
```
npm install --save-dev usuallyjs
```

通过 es6 模块引用：
```javascript
// 全部引入
import * as U from 'usuallyjs'

// 按需引入
import {uniqueItems， mask} from 'usuallyjs'
```
注意：通过 es6 模块引入的是源码，需要自行配置 babel 开发环境。

### 浏览器安装和使用

下载本存储库，在页面中通过 script 标签引入 dist 文件夹下的 usually.js 文件即可，建议使用压缩版本 usually.min.js。通过命名空间 U 调用相关的函数。
如：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>usually浏览器安装和使用示例</title>
    <script src="dist/usually.min.js"></script>
  </head>
  <body>
    <script>
      var a = U.random()
    </script>
  </body>
</html>
```

# 浏览器兼容

支持 IE10+ 和现代浏览器

# 贡献

在提出拉取请求之前，请务必阅读[贡献指南](https://github.com/JofunLiang/usuallyjs/blob/master/CONTRIBUTING.md)。

# LICENSE

MIT
