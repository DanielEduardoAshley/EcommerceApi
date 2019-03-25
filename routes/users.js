const express = require('express');
const usersRouter = express.Router();
const {usersServices} = require('../services/usersServices');

//gets  buyer/seller 
usersRouter.get('/:username', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    const {username} = req.params;
   usersServices.read(username)
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
//login buyer/seller
// usersRouter.post('/login', (req,res)=>{
//     const {name , email, password} = req.body
//     res.status(200)
//     res.send('users')



// })


   

// usersRouter.get('/:id',(req,res)=>{
//     const {id} = req.params
//     // const id = 5
//    return usersServices.read(req.params)
//     .then((response)=>{
//         res.status(200)
//         res.json({'test':'1'})
//     })
// }) 

//update specific buyer/seller page    
usersRouter.put('/:username', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion, shopname} = req.body
    // const {username} = req.params
    usersServices.update(name, email, address, number,country, state, zip, cc,age,type,descritpion, shopname)
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

//delete specific buyer/seller --Authen
usersRouter.delete('/:username', (req,res)=>{
    const {username} = req.params
    usersServices.delete(username)
    .then((response)=>{
        console.log('hello')
        // console.log('RESPONSE IS:', response)
    res.status(200)
    res.send({response})
})
.catch((err)=>{
    res.status(400)
    res.send(err)
})                
                
                
                })

//get specific buyer/sellers orders --Authen
usersRouter.get('/orders/:orders_id', (req,res)=>{
    const {id} = req.params
    usersServices.read(id)
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

//Get orders --Auth
// usersRouter.get('/orders', (req,res)=>{

//      usersServices.read()
//     .then((response)=>{
//         console.log('hello')
//         console.log('RESPONSE IS:', response)
//     res.status(200)
//     res.send({response})
// })
// .catch((err)=>{
//     res.status(400)
//     res.send(err)
// })
                
                
                
                // })

module.exports={

        usersRouter
        

}