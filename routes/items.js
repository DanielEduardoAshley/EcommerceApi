const express = require('express');
const itemsRouter = express.Router();
// const itemsService = require('../services/items');


itemsRouter.post('/items', (req,res)=>{
ls

    res.json('items')



})


itemsRouter.get('/items', (req,res)=>{

    res.json('items')
    
    
    
    })



itemsRouter.put('/items', (req,res)=>{

    res.json('items')
        
        
        
        })

itemsRouter.delete('/items', (req,res)=>{

    res.json('items')
                
                
                
                })


module.exports={

        itemsRouter

}