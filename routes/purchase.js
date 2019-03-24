const express = require('express');
const purchaseRouter = express.Router();
// const purchaseService = require('../services/purchase');


purchaseRouter.post('/purchase', (req,res)=>{

    res.json('purchase')



})


purchaseRouter.get('/purchase', (req,res)=>{

    res.json('purchase')
    
    
    
    })



purchaseRouter.put('/purchase', (req,res)=>{

    res.json('purchase')
        
        
        
        })

purchaseRouter.delete('/purchase', (req,res)=>{

    res.json('purchase')
                
                
                
                })


module.exports={

        purchaseRouter

}