const express = require('express');
const purchaseRouter = express.Router();
// const {purchasesServices} = require('../services/purchase');


purchaseRouter.post('/', (req,res)=>{
    res.json('purchase')



})


purchaseRouter.get('/:id', (req,res)=>{

    res.json('purchase')
    
    
    
    })

purchaseRouter.get('/:user_id', (req,res)=>{

        res.json('purchase')
        
        
        
    })


module.exports={

        purchaseRouter

}