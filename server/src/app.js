require('dotenv').config()
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import routes from './routes'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { catchErr } from 'common/utils'
const app = express()

// middlewares
app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test'
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(express.static('client/dist'))

// Routes
app.use('/api', routes)

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  catchErr(req, res, err, err.status, 'Something went wrong!')
})

export default app
