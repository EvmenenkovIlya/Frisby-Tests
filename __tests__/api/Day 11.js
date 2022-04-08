const frisby = require('frisby');
const Joi = frisby.joi;
describe('Day 11', () => {

  it('Check status', () => {
    return frisby.get('https://water-ttl.herokuapp.com/hygrometer')
    .expect('status', 200);
  });

  it('Water the plant', () => {
    return frisby.get('https://water-ttl.herokuapp.com/hygrometer')
    .expect('status', 200)
    .then((result) => {
      console.log('Check level of water: ' + result.json.level);
      if (result.json.level < 80) {
        return frisby.post('https://water-ttl.herokuapp.com/water', {
        duration: 5
        })
        .then(() => {
          console.log('We watered the plant)')
          return frisby.get('https://water-ttl.herokuapp.com/hygrometer')
          .expect('status', 200)
          .then((result) => {
            console.log('Level of Water: ' + result.json.level);
          })
        })
      } else {
        console.log('Water does not neededed');
      }
    });
  });
  
});