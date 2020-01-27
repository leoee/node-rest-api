const itemControl = require('../controllers/itemControl');

module.exports = app => {
    app.post('/item', itemControl.createItem);
    // app.get('/item', );
    app.put('/item/:id', itemControl.updateItem);
    // app.delete('/item/:id', );
}