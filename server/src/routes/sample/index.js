import { Router } from 'express'
const router = Router()
import validate from 'express-validation'
import * as requirements from './requirements'
import * as Controller from './controller'
import logger from 'common/logger'
logger.info('common logger')

router.get('/list', validate(requirements.list), (req, res) => {
  res.send('list')
})

router.get('/', Controller.get)

export default router
