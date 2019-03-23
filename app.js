const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const { usersRouter } = require('./routes/users');
const { usersServices } = require('./services/usersServices');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRouter);

// app.get('/',(req,res)=>{
//     const id = req.params
//    return usersServices.read(id)
//     .then((response)=>{
//         res.status(200)
//         res.json({'test':'1'})
//     })
// })
// app.get("/", (req, res) => {
//      res.status(200);
//      res.json({test: 1})
//   });
  

module.exports = { app }