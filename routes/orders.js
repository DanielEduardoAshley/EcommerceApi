const express = require('express');
const ordersRouter = express.Router();
const {ordersServices} = require('../services/ordersServices');

//Create order 
ordersRouter.post('/', (req,res)=>{
    const {id} = req.params
    res.send(`orders, ${id}`)
})









               


module.exports={

 ordersRouter
                    
            
            }