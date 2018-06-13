let express = require('express')
let path = require('path')
let serveStatic = require('serve-static')
let port = process.env.PORT || 5000

const app = express()
app.use(serveStatic(path.resolve('dist')))

app.listen(port)
console.log('server started at port ' + port)
