const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const urlBase = "http://localhost:8181";

describe("Test POST method", function () {
    it("Response must be 201", function (done) {
        const value = 1;
        chai
            .request(urlBase)
            .post('/item')
            .send({
                'id': value,
                'name': 'Item test',
                'amount': '100',
                'price': '10.22'
            })
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(201);
                expect(res.body.message).to.be.equal('Item ' + value + " was created!");
                done();
            });
    })
});

describe("Test GET method without params id", function () {
    it("Response must be 201", function (done) {
        const value = 1;
        chai
            .request(urlBase)
            .get('/item')
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
    })
});