const ItemSchema = require('../schemas/itemSchema');
const createItem = item => {
    return new Promise((resolve, reject) => {
        new ItemSchema(item).save()
            .then(() => resolve())
            .catch(err => reject(console.log(err)))
    });
}

const listAllItems = () => {
    return new Promise((resolve, reject) => {
        ItemSchema.find().select('-_id')
            .then(items => resolve(items))
            .catch(err => reject(handleError(err.message)))
    });
}

const getItem = id => {
    return new Promise((resolve, reject) => {
        ItemSchema.find({id: id}).select('-_id')
            .then(options => {
                if (options.length == 0) reject('Item not found');
                else resolve(options);
            })
            .catch(err => reject(err))
    });
}

module.exports = {
    createItem,
    listAllItems,
    getItem
}