
const express = require('express');
const app = express();

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();


app.use(express.json());
app.use(express.urlencoded({extended: true}));






app.listen(3000, err => {
    if (err) console.log(err);
    else console.log('Listening 3000...');
});
