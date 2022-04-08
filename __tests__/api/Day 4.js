const frisby = require("frisby");
  const Joi = frisby.Joi;
  const secretKey = 'PMAK-6230f643cc4adf66c7dbe790'
  describe("Day4", () => {
    it('Check status', function () {
        return frisby.fetch('https://api.getpostman.com/collections', {
        method : 'get',
        headers: {
            Accept: 'aplication/json', 
            'Content-Type' : 'aplication/json', 
            'x-api-key': secretKey
        },
        })
        .expect('status', 200)      
    })
    it('Check response body', function(){
        return frisby.fetch('https://api.getpostman.com/collections', {
        method : 'get',
        headers: {
            Accept: 'aplication/json', 
            'Content-Type' : 'aplication/json', 
            'x-api-key': secretKey
        },
        })
        .expect('status', 200) 
        .expect('jsonTypes', 'collections.*', {
            id: Joi.string(),
            name: Joi.string(), 
            owner: Joi.string(),
            uid: Joi.string()
        })
    })

    
})
