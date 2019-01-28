const connect = require('connect')
const serveStatic = require('serve-static')
const cp = require('child_process')

const app = connect()
app.use(serveStatic('docs')) // 可自动打开浏览器模块

// listen
app.listen(3000)
console.log('Server running at http://127.0.0.1:3000/')
cp.exec('start http://127.0.0.1:3000/')  // 自动打开默认浏览器
