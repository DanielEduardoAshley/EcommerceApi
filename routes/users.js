const express = require('express');
const usersRouter = express.Router();
const {usersServices} = require('../services/usersServices');

//create user/seller
usersRouter.post('', (req,res)=>{
    
    const {name , email, address, number, country, state, zip, cc,age,type,description, shopname} = req.body
   usersServices.create(name , email, address, number, country, state, zip, cc,age,type, description, shopname)
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

usersRouter.post('/:uid', (req, res)=>{
    const {uid} = req.params
    usersServices.readUser(uid)
    .then((response)=>{
        console.log('hello')
        console.log('RESPONSE IS:', response)
    res.status(200)
    res.json({response})
})
.catch((err)=>{
    res.status(400)
    res.send(err)
})

})

//gets  buyer/seller 
usersRouter.get('/:username', (req,res)=>{
    const {name , email, address, number, country, state, zip, cc,age,type,descritpion=null, shopname=null} = req.body
    const {username} = req.params;
    console.log('whatwrong')
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

//get user by id
usersRouter.get('/:id/user', (req,res)=>{
    const {id} = req.params;
    console.log('whatwrong')
   usersServices.readid(id)
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

//get all users
usersRouter.get('/home/profiles', (req,res)=>{
    console.log('whatwrong')
   usersServices.readAllusers()
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


//search by user
usersRouter.get('/searchuser/:userquery', (req,res)=>{
    console.log('Daniel')

    const {userquery} = req.params;
   usersServices.searchbyuser(userquery)
        .then((response)=>{
            console.log('hello Daniel')
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


   



//update specific buyer/seller page    
usersRouter.put('/:id', (req,res)=>{
    const {username,name , email, address, number, country, state, zip, cc,age,type,description, shopname} = req.body
    const {id} = req.params
    usersServices.update(username, name, email, address, number,country, state, zip, cc,age,type,description, shopname, id)
        .then((response)=>{
            console.log('hello', id)
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