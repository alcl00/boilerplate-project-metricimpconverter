const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('Test GET /convert with valid input', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=10L')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.string, '10 liters converts to 2.64172 gallons');
        done();
      })
  });
  test('Test GET /convert with invalid units', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=32g')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid unit');
        done();
      })
  });
  test('Test GET /convert with invalid number', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4kg')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid number');
        done();
      })
  });
  test('Test GET /convert with invalid number and units', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid number and unit');
        done();
      })
  });
  test('Test GET /convert with no number and only units', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=kg')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds');
        done();
      })
  });
});
