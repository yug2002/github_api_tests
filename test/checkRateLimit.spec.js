const {expect} = require('chai');
const sendRequest = require('../lib/sendRequest');
const getRateLimit = require('../data/getRateLimit.json');
const env = require('../end_points/application_end_point.json');

describe('Get rate limit', () => {
  

  getRateLimit.map((data) => {
    let response;

    before(async () => {
      data.uri = `${env.uri}${data.uri}`;
      data.headers.Authorization = `${env.token}`; 
      response = await sendRequest(data);
    });   

    it('Verifying of rate limit', () => {
      expect(response.statusCode).to.be.eql(200);
      expect(response.body.rate.limit).to.be.eql(data.body.rate.limit);
    });
  });
  
})