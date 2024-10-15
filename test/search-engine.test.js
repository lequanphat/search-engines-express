const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const should = chai.should();

chai.use(chaiHttp);
describe("Search Engine", () => {
  beforeEach((done) => {
    done();
  });
  describe("/GET elasticsearch", () => {
    it("it should GET 1 records", (done) => {
      chai
        .request(app)
        .get("/api/elasticsearch/blogs?query=second")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(1);
          done();
        });
    });
  });
  describe("/GET algolia", () => {
    it("it should GET 3 records", (done) => {
      chai
        .request(app)
        .get("/api/algolia/users?query=quanphat")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(3);
          done();
          ``;
        });
    });
  });
});
