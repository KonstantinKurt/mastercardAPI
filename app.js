const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./connections/mongoDB.js');
const transactionRouter = require('./routes/transactionRouter.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', transactionRouter);
app.get('/', (req, res) => {
    res.send('Crawler Parser');

});

app.listen(process.env.PORT, () => {
    console.log(`Server runs on http://localhost:${process.env.PORT}; Ctrl+C for exit `);
    connectDB();
});