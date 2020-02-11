const ItemSchema = require('../schemas/itemSchema');
const createDevice = item => {
    console.log(item);
    return new Promise((resolve, reject) => {
        new ItemSchema(item).save()
            .then(() => resolve())
            .catch(err => reject(console.log(err)))
    });
}
module.exports = {
    createDevice
}