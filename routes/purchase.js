const express = require('express');
const purchaseRouter = express.Router();
const {purchasesServices} = require('../services/purchaseServices');


purchaseRouter.post('/', (req,res)=>{
    const {users_id, totalamount, guest_info} = req.body
    purchasesServices.create(users_id, totalamount, guest_info)
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


purchaseRouter.get('/:id', (req,res)=>{
    const {id} = req.params
    purchasesServices.read(id)
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

purchaseRouter.get('/:user_id', (req,res)=>{
    const {user_id} = req.params
    purchasesServices.readAll(user_id)
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
        res.json('purchase')
        
        
        
    })


module.exports={

        purchaseRouter

}   