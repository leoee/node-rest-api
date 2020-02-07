const Item = require('../models/itemModel.js');
const { validationResult } = require('express-validator');

const createItem =  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    let item = new Item();
    item.setId(req.body.id);
    item.setName(req.body.name);
    item.setAmount(req.body.amount);
    item.setPrice(req.body.price);

    res.status(201).json({message: 'Item ' + item.getId() + ' was created!'});
}

const deleteItem =  (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({error: "It's missing params id"});
    } else {
        res.status(200).json({message: 'Item ' + id + ' was deleted!'});
    }
}

const getItem =  (req, res) => {
    const id = req.params.id;
    const item = req.body;
    res.status(200).json({message: 'Item XXXX was created!'});
}

const updateItem = (req, res) => {
    const id = req.params.id;
    const errors = validationResult(req);

    if (!errors.isEmpty() || !id) {
        return res.status(422).json({ errors: errors.array() });
    }
    let item = new Item();
    item.setId(req.body.id);
    item.setName(req.body.name);
    item.setAmount(req.body.amount);
    item.setPrice(req.body.price);

    res.status(200).json({message: 'Item XXXX was updated!'});
}

module.exports = {
    createItem,
    deleteItem,
    getItem,
    updateItem
}