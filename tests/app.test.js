const request = require('supertest')
const {app} = require('../app.js')

jest.mock('../services/dbServices')
const db = require('../services/dbServices')

jest.mock('../services/usersServices')
const {usersServices} = require('../services/usersServices')

const {usersRouter} = require('../routes/users')

// describe('GET/users/5', ()=>{
test('expect {test:1}', done =>{
    usersServices.read.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .get('/users/foobar')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(204)
            done();
        })
    //     .catch(()=>{
    //         // expect(404).toBe(404)
    //         done()
    // })

})

// })})


// test('it should not pass', ()=>{
//     expect(true).toBe(true)
// });


// test('should get back a string 400 if empty', done =>{
//     request(app)
//     .get('/:id')
//     .send({})
//     .catch(()=>{
//         expect(response.status).tobe(400)
//         done();

//     })




// })

// test('expect to get back 200 if all informatino sent',done=>{
//     request(app)
//     .post('/')
//     .send({

//         name : 'a', 
//         email : 'b', 
//         address : 'c', 
//         number : 'd',
//         country : 'e', 
//         state: 'f', 
//         zip: 'g', 
//         cc: 'h',
//         age: 'i',
//         type: 'j',
//         descritpion : 'k', 
//         shopname : 'l'
//     })
//     .then((response)=>{
//         expect(response.status).tobe(204);
//         done();
//     })

