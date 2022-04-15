const frisby = require('frisby');
const Joi = frisby.joi;
describe('Day 7', ()=>{
    it('Check status 404 without body', function() {
    return frisby.get('https://api.nasa.gov/planetary')
    .expect('status', 404);
    })
    it('Check status 403 without api key', function() {
        return frisby.get('https://api.nasa.gov/planetary/apod')
        .expect('status', 403);
        })
    it('Check status 200', function() {
        return frisby.fetch('https://api.nasa.gov/planetary/apod', {
            method : 'get',
            headers: {
                Accept: 'aplication/json', 
                'Content-Type' : 'aplication/json', 
                'x-api-key': 'DEMO_KEY'
            },
            })
        .expect('status', 200)
        .then((result) => {
            console.log(result.json);
          });
    })

    it('Get different img', function() {
        const count = new URLSearchParams({ count: 10 , api_key: 'DEMO_KEY' });
        return frisby.fetch(`https://api.nasa.gov/planetary/apod?${count}`, {
            method : 'get',
            headers: {
                Accept: 'aplication/json', 
                'Content-Type' : 'aplication/json', 
            },
            })
        .expect('status', 200)
        .then((result) => {
            console.log(result.json)})    
    })
})

