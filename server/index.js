let express = require('express')
let path = require('path')
let serveStatic = require('serve-static')
var history = require('connect-history-api-fallback')
let port = process.env.PORT || 5000

const app = express()
app.use(history())
app.use(serveStatic(path.resolve('dist')))

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

app.listen(port)
console.log('server started at port ' + port)
