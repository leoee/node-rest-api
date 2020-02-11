const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Id required'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name required']
    },
    amount: {
        type: String,
        required: [true, 'Amount required']
    },
    price: {
        type: String,
        required: [true, 'Price required'],
    }
});

ItemSchema.plugin(uniqueValidator, { message: "Two devices cannot have the same field '{PATH}'" });

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;