const itemControl = require('../controllers/itemControl');
const { check } = require('express-validator');

module.exports = app => {
    app.post('/item', [
        check('id').exists(),
        check('name').exists(),
        check('amount').exists(),
        check('price').exists()
      ], itemControl.createItem);
    app.get('/item', itemControl.getItem);
    app.get('/item/:id', itemControl.getItemById);
    app.put('/item/:id', [
      check('id').exists(),
      check('name').exists(),
      check('amount').exists(),
      check('price').exists()
    ], itemControl.updateItem);
    app.delete('/item/:id', itemControl.deleteItem);
}