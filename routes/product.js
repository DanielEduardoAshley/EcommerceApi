const express = require('express');
const productRouter = express.Router();
const {productServices} = require('../services/productServices');


//create a seller's products --Authen
productRouter.post('/', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    res.send('product')



})

//get all products of a seller
productRouter.get('/', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    res.send('product 3')



})

//get a specific product of a specific user
productRouter.get('/:product', (req,res)=>{
    const {id} = req.params
    res.send(`product ${id}`)
    })

//update a seller product --Authen
productRouter.put('/:product_id', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    const {product_id} = req.params
    res.send(`product, ${product_id}`)
        
        
        
        })

//delete a sellers specific product --Authen
productRouter.delete('/:product_id', (req,res)=>{
    const {product_id} = req.params
    res.send(`product, ${product_id}`)
                
                
                
                })



module.exports={

        productRouter

}