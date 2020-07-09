const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

const app = require('../app');
const createVote = require('../db/createVote');
const db = require('../db');

chai.use(chaiHttp);

describe('Votes API', () => {
  before(() => db.connect());
  beforeEach(async () => {
    await createVote({ stripeToken: '6789', type: 'HEAD_HAIR', choice: 'MULLET' });
    await createVote({ stripeToken: '6789', type: 'FACIAL_HAIR', choice: 'SOUL_PATCH' });
  });
  afterEach(() => db.query("DELETE FROM votes WHERE stripe_token = '6789'"));

  it('responds with empty array if the requesting client has not voted', async () => {
    const dummyToken = '1234';
    const response = await chai.request(app).get(`/api/votes/${dummyToken}`);
    expect(response).to.have.status(200);
    expect(response.body).to.eql([]);
  });
  it('responds with vote JSON data if the requesting client has voted', async () => {
    const dummyToken = '6789';
    const response = await chai.request(app).get(`/api/votes/${dummyToken}`);
    expect(response).to.have.status(200);
    expect(response.body).to.eql([
      { type: 'HEAD_HAIR', choice: 'MULLET' },
      { type: 'FACIAL_HAIR', choice: 'SOUL_PATCH' }
    ]);
  });
});
