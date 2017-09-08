import logger from 'common/logger'

export const get = (req, res) => {
  logger.warn('get')
  res.json({ get: true })
}
