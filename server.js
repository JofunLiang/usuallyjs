const connect = require('connect')
const serveStatic = require('serve-static')
const cp = require('child_process')

const app = connect()
app.use(serveStatic(__dirname + '/docs')) // 可自动打开浏览器模块

// listen
const server = app.listen(3000)

server.on('listening', function () {
  server.close()
  app.listen(3000)
  console.log('Server running at http://127.0.0.1:3000/')
  cp.exec('start http://127.0.0.1:3000/')
})
