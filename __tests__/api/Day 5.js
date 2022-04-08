const frisby = require("frisby");
  const Joi = frisby.Joi;
  describe("Day5", () => {

    it('Check status', function () {
        return frisby.get('https://api.coindesk.com/v1/bpi/currentprice/btc.json')
        .expect('status', 200) 
    })  
  
    it('Check status with variable', function () {
        const currensy = 'usd'
        return frisby.get('https://api.coindesk.com/v1/bpi/currentprice/'+ currensy +'.json')
        .expect('status', 200) 
        .then((result)=> {
            console.log(result.body);
          });    
          
    })
})