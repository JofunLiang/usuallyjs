# usuallyjs

usuallyjs 是一个面向现代 Web 开发的 JavaScript 实用函数库。

usuallyjs 基于 ES6 开发，抛弃了传统 Web 开发中 DOM 和 BOM 操作部分的内容，精选了一系列 Web 开发过程中最常用的、最实用的 JavaScript 函数。与 Vue、React、Angular等现代 Web 框架搭配使用，更好的服务于开发现代 Web 应用。

# 版本历史/更改日志

<details>
<summary>v1.0.3</summary>
1、更新时间：2019-01-24
2、更新内容：
  1）、优化 random 函数
  2）、优化 repeatItems 函数
</details>

<details>
<summary>v1.0.0</summary>
1、更新时间：2019-01-20
</details>

# 安装和使用

### npm安装和使用

通过 npm 使用如下命令安装：
```
npm install --save-dev usuallyjs
```

通过 es6 模块引用：
```javascript
import U from 'usuallyjs'
```

通过 node 模块引用：
```javascript
const U = require('usuallyjs')
```

### 浏览器安装和使用

下载本存储库，在页面中通过 script 标签引入 dist 文件夹下的 usually.js 文件即可，建议使用压缩版本 usually.min.js。通过命名空间 U 调用相关的函数。
如：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>usually浏览器安装和使用示例</title>
    <script src="dist/usually.js"></script>
  </head>
  <body>
    <script>
      var a = U.random()
    </script>
  </body>
</html>
```

# 浏览器兼容

支持 IE9+ 和现代浏览器

# LICENSE

MIT
