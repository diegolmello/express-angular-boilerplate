const { NODE_ENV = 'development' } = process.env
const config = require('config/database')[NODE_ENV]

export default require('knex')(config)
