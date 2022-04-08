const frisby = require('frisby');
const Joi = frisby.Joi;

describe('Day 17', () => {

  it('Check status', () => {
    return frisby.get('https://pokeapi.co/api/v2/type')
    .expect('status', 200)
    .then((result) => {
      console.log(result.json);
    })
  })

  it('Check response body', () => {
    return frisby.get('https://pokeapi.co/api/v2/type')
    .expect('status', 200)
    .expect('jsonTypes','count', Joi.number().required())
  })
})