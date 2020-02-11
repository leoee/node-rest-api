const mongoose = require('mongoose');

mongoose.connect("link here",
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }
).then(function () {
    console.log('Database connected');
}).catch(function () {
    console.log('Error to connect database');
});