// Example test file: app.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe("GET /", () => {
  it("should return Hello, GitHub Actions!", (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.equal('Hello, GitHub Actions!');
        done();
      });
  });
});
