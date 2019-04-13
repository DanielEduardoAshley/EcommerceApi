const express = require('express');
const purchaseRouter = express.Router();
const {purchasesServices} = require('../services/purchaseServices');


purchaseRouter.post('', (req,res)=>{
    const {users_id, receipt, totalamount, name,address,city,state,zip,country,cc} = req.body
    console.log('healthcheck',users_id, receipt, totalamount, name,address,city,state,zip,country,cc)
    purchasesServices.create(parseInt(users_id), receipt, parseInt(totalamount), name,address,city,state,parseInt(zip),country,cc)
    .then((response)=>{
        console.log('hello')
        console.log(' purchase IS:', response)
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