# usuallyjs贡献指南

嗨！我很高兴你有兴趣为usuallyjs做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。

* [问题报告指南](https://github.com/JofunLiang/usuallyjs/blob/master/CONTRIBUTING.md#issue-reporting)
* [拉请求指南](https://github.com/JofunLiang/usuallyjs/blob/master//CONTRIBUTING.md#pull-request)
* [开发设置](https://github.com/JofunLiang/usuallyjs/blob/master//CONTRIBUTING.md#development-setup)
* [项目结构](https://github.com/JofunLiang/usuallyjs/blob/master//CONTRIBUTING.md#project-structure)

<h3 id="issue-reporting">问题报告指南</h3>

* 始终使用[https://github.com/JofunLiang/usuallyjs/issues](https://github.com/JofunLiang/usuallyjs/issues)来创建新问题。

<h3 id="pull-request">拉请求指南</h3>

* 该master分支基本上只是最新稳定版本。所有开发都应该在专门的分支中完成 不要向master分支提交PR 。

* 请从dev分支中新建主题分支，并与该分支合并。

* 请在src文件夹中工作。

* 如果添加新功能：
  * 添加随附的测试用例。
  * 提供令人信服的理由来添加此功能。理想情况下，您应首先打开一个建议问题。

* 如果修复的bug：
  * 如果您要解决特殊问题，请(fix #xxxx[,#xxx])在PR中标题添加（#XXXX是问题ID）以获得更好的发布日志，例如update entities encoding/decoding (fix #3899)。
  * 提供错误的详细描述。
  * 如果可以，请添加适当的测试范围。

<h3 id="development-setup">开发设置</h3>

您需要配置[Node.js](https://nodejs.org/en/)环境和[jsDoc](http://usejsdoc.org/)运行环境。

克隆repo后，运行：
```
# 全局安装jsdoc
$ npm install -g jsdoc

# 安装项目依赖
$ npm install
```

#### 常用的NPM脚本
```
# 监听并自动构建 dist/usually.js
$ npm run dev

# 运行 jest 测试文件
$ npm run test

# 构建 dist
$ npm run build

# 生成文档并在浏览器中打开文档页面
$ npm run jsdoc
```

该package.json文件的scripts部分中还有一些其他脚本可用。

<h3 id="project-structure">项目结构</h3>

* dist：包含用于分发的构建文件。请注意，此目录仅在发布时更新; 它们没有反映开发分支的最新变化。

* test：包含所有测试。单元测试用jest编写。

* src：包含源代码。代码库使用jsDoc规范注释。
  
  * array.js: 数组模块。
  * date.js: 日期模块。
  * function.js: 函数模块。
  * index.js: 主要文件。
  * number.js: 数字模块。
  * object.js: 对象模块。
  * string.js: 字符串模块。
  * type.js: 类型判断模块。
