const frisby = require("frisby");
  const Joi = frisby.Joi;
  describe("Day6", () => {

    it('Check status', function () {
        return frisby.get('https://api.chucknorris.io/jokes/random')
        .expect('status', 200) 
    })

    it('Check response body', function(){
        return frisby.get('https://api.chucknorris.io/jokes/random')
        .expect('status', 200) 
        .then((result)=> {
            console.log(result.json)})
        .expect('jsonTypes', 'categories', Joi.array())
        .expect('jsonTypes', 'icon_url', Joi.string().uri())
        .expect('jsonTypes', 'url', Joi.string().uri())
        .expect('jsonTypes', 'value', Joi.string())        
    })

    it('Get a joke', function(){
        return frisby.get('https://api.chucknorris.io/jokes/random')
        .expect('status', 200) 
        .then((result)=> {             
            console.log(result.body.value) 
        })
    })
})