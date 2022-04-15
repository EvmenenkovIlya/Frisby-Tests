
const frisby = require('frisby');

const url = 'https://docs.jsonata.org/string-functions';

describe('Day 28', () => {
  it('Check status 200 response', () => {
    return frisby.get(url)
    .expect('status', 200)
    .expect('responseTime','1000');
  });

  it('Check Sstatus 200', () => {
    return frisby.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=' + url)
    .expect('status', 200)
    .expect('responseTime','1000');
  });
  
});