const express = require('express');
const usersRouter = express.Router();
// const usersService = require('../services/users');

//creates new buyer/seller //Register
usersRouter.post('/', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    res.send('users')



})
//login buyer/seller
usersRouter.post('/login', (req,res)=>{
    const {name , email, password} = req.body
    res.send('users')



})

//specific logged in buyer/seller's page
usersRouter.get('/:id', (req,res)=>{
    const {id} = req.params
    res.status(200)
    .send(`users ${id}`)
    
    
    
    })

   

//update specific buyer/seller page    
usersRouter.put('/:id', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    const {id} = req.params
    res.send(`users, ${id}`)
        
        
        
        })

//delete specific buyer/seller --Authen
usersRouter.delete('/:id', (req,res)=>{
    const {id} = req.params
    res.send(`users, ${id}`)
                
                
                
                })

//get specific buyer/sellers orders --Authen
usersRouter.get('/:id/orders', (req,res)=>{
    const {id} = req.params
    res.send(`users, ${id}`)
                    
                    
                    
})


//create specific users orders
usersRouter.post('/:id/orders', (req,res)=>{
    const {id} = req.params
    res.send(`users, ${id}`)
})



//create a seller's products --Authen
usersRouter.post('/:id/product', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    res.send('users')



})

//get all products of a seller
usersRouter.get('/:id/product', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    res.send('users 3')



})

//get a specific product of a specific user
usersRouter.get('/:id/product/:product', (req,res)=>{
    const {id} = req.params
    res.send(`users ${id}`)
    })

//update a seller product --Authen
usersRouter.put('/product/:product_id', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    const {product_id} = req.params
    res.send(`users, ${product_id}`)
        
        
        
        })

//delete a sellers specific product --Authen
usersRouter.delete('/product/:product_id', (req,res)=>{
    const {product_id} = req.params
    res.send(`users, ${product_id}`)
                
                
                
                })



//creates users orders
usersRouter.post('/order', (req,res)=>{
    res.send(`users`)
                
                
                
                })
module.exports={

        usersRouter

}