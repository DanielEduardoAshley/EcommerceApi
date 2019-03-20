const express = require('express');
const productRouter = express.Router();
// const productService = require('../services/product');


productRouter.post('/product', (req,res)=>{

    res.json('product')



})


productRouter.get('/product', (req,res)=>{

    res.json('product')
    
    
    
    })



productRouter.put('/product', (req,res)=>{

    res.json('product')
        
        
        
        })

productRouter.delete('/product', (req,res)=>{

    res.json('product')
                
                
                
                })


module.exports={

        productRouter

}