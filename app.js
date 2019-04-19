const express = require('express');
const app = express();
// const bcrypt = require('bcrypt');

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

const apiRouter = require('./routes/apiRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/api', apiRouter);

let arr = require('./config/arrayHashTable');
let qwe = '$2b$10$KOKT0oeYEjlmHCZdl50oIOpBRzy0V8EFUco36zQ52ZTEJt9nAILei';

let filter =  arr.filter((item) => {
    if (qwe === item.hash) {
        return item;
    }
});

console.log(filter[0].table);

app.listen(3000, err => {
    if (err) console.log(err);
    else console.log('Listening 3000...');
});



