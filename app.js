const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')
const { usersRouter } = require('./routes/users')

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/users', usersRouter)

module.exports = { app }