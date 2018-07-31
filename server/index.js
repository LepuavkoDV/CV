import dotenv from 'dotenv'
dotenv.config()
/* eslint-disable import/first */
import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import bodyParer from 'body-parser'
import Debug from 'debug'
import morgan from 'morgan'
import apiv1 from './routes/api/v1/'
import gql from './routes/graphql'
// import listEndpoints from 'express-list-endpoints'

import { connect } from './system/database'
connect()

import passport from 'passport'
import init from './system/passport'
init()

const debug = Debug('server:*')

const port = process.env.PORT || 5000
const webServer = express()

webServer.use(morgan('dev'))
webServer.use(cors({ origin: '*' }))
webServer.use(bodyParer.json())
webServer.use(history({}))
webServer.use(serveStatic(path.join(__dirname, '..', 'dist')))
webServer.use(passport.initialize())
webServer.use('/api/v1', apiv1)

webServer.listen(port, () => debug('Web Server listening on port =', port, 'ENV =', process.env.NODE_ENV))

const port2 = process.env.PORT2 || 5001
const gqlServer = express()
gqlServer.use('/gql', gql)
gqlServer.listen(port2, () => debug('GraphQL Server listening on port =', port2, 'ENV =', process.env.NODE_ENV))

// console.log(listEndpoints(webServer))
