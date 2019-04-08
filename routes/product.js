const express = require('express');
const productRouter = express.Router();
const {productServices} = require('../services/productServices')


//create a seller's products --Authen
productRouter.post('/', (req,res)=>{
    console.log('hiDaniel')
    const {seller_id,description, duration,location, type, name, price, images} = req.body
    productServices.create(seller_id,description, duration,location, type, name, price, images)
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
productRouter.get('/:seller_id/products', (req,res)=>{
    const {seller_id} = req.params
    console.log('got there')
    productServices.readAll(seller_id)
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
productRouter.get('/:product_id/product', (req,res)=>{
    const {product_id} = req.params
    productServices.read(product_id)
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
//Search product by product/activity
productRouter.get('/searchproducts/:type/query/:searchquery', (req,res)=>{
    const { type, searchquery} = req.params
    console.log('hello')
    productServices.searchproducts(searchquery, type)
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
productRouter.put('/:product_id', (req,res)=>{
    console.log('thispoint')
    const {description, duration,location, type, name, price, images} = req.body
    const {product_id} = req.params
    const {user_id} = req.params
    productServices.update(product_id,description, duration,location, type, name, price, images)
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
productRouter.delete('/:product_id', (req,res)=>{
    const {product_id} = req.params

    productServices.delete(product_id)
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