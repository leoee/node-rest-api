const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const consign = require('consign');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;