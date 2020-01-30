const itemControl = require('../controllers/itemControl');

module.exports = app => {
    app.post('/item', itemControl.createItem);
    app.get('/item', itemControl.getItem);
    app.get('/item/:id', itemControl.getItem);
    app.put('/item/:id', itemControl.updateItem);
    app.delete('/item/:id', itemControl.deleteItem);
}