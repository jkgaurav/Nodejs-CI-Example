const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;

chai.use(chaiHttp);

describe("GET /", () => {
  let server;
  let request;

  // Start a new server instance before each test
  beforeEach((done) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      request = chai.request(`http://localhost:${port}`);
      done();
    });
  });

  // Close the server after each test
  afterEach(() => {
    server.close();
  });

  it("should return Hello, GitHub Actions!", (done) => {
    request.get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, GitHub Actions!');
        done();
      });
  });
});
