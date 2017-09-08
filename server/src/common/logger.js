import * as winston from 'winston'

winston.configure({
  transports: [
    new winston.transports.Console({
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
})

const logger = winston
export default logger
