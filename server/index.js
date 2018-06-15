import express from 'express'
import { resolve } from 'path'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
let port = process.env.PORT || 5000

const app = express()
app.use(history())
app.use(serveStatic(resolve('dist')))

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})

app.listen(port)
console.log('server started at port ' + port)
