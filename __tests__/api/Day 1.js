const frisby = require("frisby");
  const Joi = frisby.Joi;
  describe("Day1", () => {
    it('Check status and message', function () {
        return frisby.post('https://postman-echo.com/post', {
            payload: 'hello world, this is my first test in frisby'
        })
        .expect('status', 200)
        .expect('json', 'data', {
            payload: 'hello world, this is my first test in frisby'
          })
        .then((result) => {
            console.log(result.json);
        })
    })

    it('Check response body', function (){
        return frisby.post('https://postman-echo.com/post',{})
        .expect('json','args', {})
        .expect('json','files', {})
        .expect('json','form', {})
        .expect('jsonTypes', 'headers', Joi.object())
    })
});