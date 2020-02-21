const chai = require("chai");
const itemDAO = require('../app/models/itemDAO');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

describe("Test createItem method", function () {
    let item = null;
    before(() => {
        item = {
            "id": "999",
            "name": "22",
            "amount": "3",
            "price": "4"
        };
    });

    it("You should receive reject()", function (done) {
        expect(itemDAO.createItem()).to.be.rejected;
        done();
    })

    it("You should receive resolve()", function (done) {
        expect(itemDAO.createItem(item)).to.be.fulfilled;
        done();
    })
});