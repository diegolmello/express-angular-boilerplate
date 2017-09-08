import Joi from 'joi'

export const list = {
  query: {
    test: Joi.number().required()
  }
}
