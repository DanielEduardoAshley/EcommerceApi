const express = require('express');
const productRouter = express.Router();
const {productServices} = require('../services/productServices')


//create a seller's products --Authen
productRouter.post('/', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion, shopname} = req.body
    productServices.create(name , email, address, number, country, state, zip, cc,age,type,descritpion, shopname)
    .then((response)=>{
        console.log('hello')
        console.log('RESPONSE IS:', response)
    res.status(200)
    res.send({response})
})
.catch((err)=>{
    res.status(400)
    res.send(err)
})


})

//get all products of a seller
productRouter.get('/:user_id/product', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    const {id} = req.params
    productServices.read(id)
    .then((response)=>{
        console.log('hello')
        console.log('RESPONSE IS:', response)
    res.status(200)
    res.send({response})
})
.catch((err)=>{
    res.status(400)
    res.send(err)
})



})

//get a specific product of a specific seller
productRouter.get('/:user_id/product/:product_id', (req,res)=>{
    const {product_id} = req.params
    const {user_id} =req.params
    productServices.read(product_id, user_id)
    .then((response)=>{
        console.log('hello')
        console.log('RESPONSE IS:', response)
        res.status(200)
        res.send({response})
    })
    .catch((err)=>{
        res.status(400)
        res.send(err)
    })
})

//update a seller product --Authen
productRouter.put('/:user_id/product/:product_id', (req,res)=>{
    const {description, duration,location, type, name, price, images} = req.body
    const {product_id} = req.params
    const {user_id} = req.params
    productServices.update(user_id,product_id,description, duration,location, type, name, price, images)
    .then((response)=>{
        // console.log('hello')
        // console.log('RESPONSE IS:', response)
        res.status(200)
        res.send({response})
    })
    .catch((err)=>{
        res.status(400)
        res.send(err)
    })      
})

//delete a sellers specific product --Authen
productRouter.delete('/:user_id/product/:product_id', (req,res)=>{
    const {product_id} = req.params
    const {user_id} = req.params

    productServices.delete(user_id,product_id)
    .then((response)=>{
        console.log('hello')
        console.log('RESPONSE IS:', response)
    res.status(200)
    res.send({response})
})
.catch((err)=>{
    res.status(400)
    res.send(err)
})
                
                
                
                })



module.exports={

        productRouter

}