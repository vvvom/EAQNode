const express = require('express');
const app = express();

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

const apiRouter = require('./routes/apiRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.listen(3000, err => {
    if (err) console.log(err);
    else console.log('Listening 3000...');
});
