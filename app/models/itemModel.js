class Item {
    constructor() {
        this._id = '';
        this._name = '';
        this._amount = '';
        this._price = '';
    }

    setId(id) {
       this._id = id;
    }

    getId() {
        return this._id;
    }

    setName(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setAmount(amount) {
        this._amount = amount;
    }

    getAmount() {
        return this._amount;
    }

    setPrice(price) {
        this._price = price;
    }

    getPrice() {
        return this._price;
    }
  }

module.exports = Item;