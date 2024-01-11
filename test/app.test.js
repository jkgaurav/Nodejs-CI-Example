const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;

chai.use(chaiHttp);

describe("GET /", () => {
  let server;

  // Start the server before the tests
  before((done) => {
    server = app.listen(3000, () => {
      done();
    });
  });

  // Stop the server after the tests
  after(() => {
    server.close();
  });

  it("should return Hello, GitHub Actions!", (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, GitHub Actions!');
        done();
      });
  });
});
