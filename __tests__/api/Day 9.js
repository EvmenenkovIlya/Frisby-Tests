const frisby = require('frisby');
const Joi = frisby.joi;
describe('Day 9', ()=>{
    it('Check status',  function () {
        const gender = 'male'
        return frisby.post('https://postman-echo.com/post?' + gender, {
        name: 'Mr Thomas Jones',
        email: 'thomas.jones@example.com',
        uuid: 'e7a58de3-2aae-4aad-b324-7178bcadd158'
      })
      .expect('status', 200)
      .then((result) => {
        console.log(result.json);
      })
    })
})