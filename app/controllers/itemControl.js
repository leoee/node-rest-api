const itemDAO = require('../models/itemDAO');
const { validationResult } = require('express-validator');

const createItem =  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        await itemDAO.createDevice(req.body);
        res.status(201).json({ success: true, message: 'Item ' + req.body.id + ' was created!' });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }
}

const deleteItem =  (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({error: "It's missing params id"});
    } else {
        res.status(200).json({message: 'Item ' + id + ' was deleted!'});
    }
}

const getItem =  async (req, res) => {
    try {
        const item = await itemDAO.listAllItems();
        res.status(200).json({ success: true, item: item });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }
}

const getItemById =  async (req, res) => {
    const id = req.params.id;
    try {
        const items = await itemDAO.getItem(id);
        res.status(200).json({ success: true, items: items });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
    }
}

const updateItem = (req, res) => {
    const id = req.params.id;
    const errors = validationResult(req);

    if (!errors.isEmpty() || !id) {
        return res.status(422).json({ errors: errors.array() });
    }
    res.status(200).json({message: 'Item XXXX was updated!'});
}

module.exports = {
    createItem,
    deleteItem,
    getItem,
    updateItem,
    getItemById
}