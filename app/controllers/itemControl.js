const Item = require('../models/itemModel.js');

const createItem =  (req, res) => {
    let item = new Item();
    item.setId(1);
    item.setName(req.body.name);
    item.setAmount(req.body.amount);
    item.setPrice(req.body.price);

    console.log(item);

    res.status(201).json({message: 'Item ' + item.getId() + ' was created!'});
}

const deleteItem =  (req, res) => {
    const id = req.params.id;
    res.status(200).json({message: 'Item ' + id + ' was deleted!'});
}

const getItem =  (req, res) => {
    const id = req.params.id;
    console.log(id);
    const item = req.body;
    res.status(200).json({message: 'Item XXXX was created!'});
}

const updateItem = (req, res) => {
    const id = req.params.id;
    const item = req.body;

    console.log(item);

    res.status(200).json({message: 'Item XXXX was updated!'});
}

module.exports = {
    createItem,
    deleteItem,
    getItem,
    updateItem
}