const createItem =  (req, res) => {
    const item = req.body;
    res.status(201).json({message: 'Item XXXX was created!'});
}

const updateItem = (req, res) => {
    const id = req.params.id;
    const item = req.body;

    console.log(item);

    res.status(200).json({message: 'Item XXXX was updated!'});
}

module.exports = {
    createItem,
    updateItem
}