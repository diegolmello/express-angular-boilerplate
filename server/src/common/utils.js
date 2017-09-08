import fs from 'fs'
import logger from 'common/logger'

export const logErr = (req, status, err, callback) => {
  var errorMsg = ''
  if (typeof err === 'object') {
    if (err.message) {
      errorMsg += '\nMessage: ' + err.message
    }
    if (err.stack) {
      errorMsg += '\nStacktrace:'
      errorMsg += '\n===================='
      errorMsg += err.stack
    }
  } else {
    errorMsg += 'dumpError :: argument is not an object'
  }

  // prettier-ignore
  var log = '*************' + '\n' +
    'Date: ' + new Date() + '\n' +
    'Method: ' + req.method + '\n' +
    'Path: ' + req.path + '\n' +
    'Params: ' + JSON.stringify(req.params) + '\n' +
    'Query: ' + JSON.stringify(req.query) + '\n' +
    'Body: ' + JSON.stringify(req.body) + '\n' +
    'Status: ' + status + '\n' +
    'Err: ' + errorMsg + JSON.stringify(err) + '\n'
  fs.appendFile('logs.txt', log, () => {
    callback()
  })
}

export const catchErr = (req, res, err, errCode, clientMsg) => {
  errCode = errCode || 500
  logger.error(err)
  logErr(req, errCode, err, () => {
    res.status(errCode).json(clientMsg ? { message: clientMsg } : {})
  })
}
