import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import bodyParer from 'body-parser'
import Debug from 'debug'
import morgan from 'morgan'
import apiv1 from './routes/v1/api'

const debug = Debug('server:*')

let port = process.env.PORT || 5000

let app = express()
app.use(morgan('dev'))
app.use(cors({ origin: '*' }))
app.use(bodyParer.json())
app.use(history())

app.use(serveStatic(path.join(__dirname, '..', 'dist')))
app.use('/api/v1', apiv1)

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV))
