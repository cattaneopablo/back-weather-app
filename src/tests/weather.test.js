const request = require("supertest");
const should = require("should");
const app = require("../app");

// Testing location endpoint
describe("📌 GET /v1/location", () => {
  it("responds with json and success status", (done) => {
    request(app)
      .get("/v1/location")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        return done();
      });
  });

  it('responds with an object that includes "city" property', (done) => {
    request(app)
      .get("/v1/location")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        should(res.body).be.an.instanceOf(Object).and.have.property("city");

        return done();
      });
  });
});

// Testing current endpoint
describe("📌 GET /v1/current", () => {
  it("responds with json and success status", (done) => {
    request(app)
      .get("/v1/current")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        return done();
      });
  });

  it("responds with an array and its legth is 1", (done) => {
    request(app)
      .get("/v1/current")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        should(res.body).be.an.instanceOf(Array).and.have.lengthOf(1);

        return done();
      });
  });
});

// Testing current endpoint with city param
describe("📌 GET /v1/current/:city", () => {
  it("responds with json and success status", (done) => {
    request(app)
      .get("/v1/current/Córdoba")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        return done();
      });
  });

  it("responds with an array and its legth is 1", (done) => {
    request(app)
      .get("/v1/current/Córdoba")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        should(res.body).be.an.instanceOf(Array).and.have.lengthOf(1);

        return done();
      });
  });
});

// Testing forecast endpoint
describe("📌 GET /v1/forecast", () => {
  it("responds with json and success status", (done) => {
    request(app)
      .get("/v1/forecast")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        return done();
      });
  });

  it("responds with an array and its legth is 5", (done) => {
    request(app)
      .get("/v1/forecast")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        should(res.body).be.an.instanceOf(Array).and.have.lengthOf(5);

        return done();
      });
  });
});

// Testing forecast endpoint with city param
describe("📌 GET /v1/forecast/:city", () => {
  it("responds with json and success status", (done) => {
    request(app)
      .get("/v1/forecast/Córdoba")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        return done();
      });
  });

  it("responds with an array and its legth is 5", (done) => {
    request(app)
      .get("/v1/forecast/Córdoba")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        should(res.body).be.an.instanceOf(Array).and.have.lengthOf(5);

        return done();
      });
  });
});
