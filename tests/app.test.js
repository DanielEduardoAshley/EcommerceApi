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
            expect(response.status).toBe(200)
            done();
        })
    //     .catch(()=>{
    //         // expect(404).toBe(404)
    //         done()
    // })

})


test('expect {test:1}', done =>{
    usersServices.read.mockImplementation(()=>{
        return Promise.reject()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .get('/users/foobar')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})

test('expect {test:1}', done =>{
    usersServices.update.mockImplementation(()=>{
        return Promise.resolve()
    })
     request(app)
        .put('/users/foobar')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(200)
            done();
        })
      

})

test('expect {test:1}', done =>{
    usersServices.update.mockImplementation(()=>{
        return Promise.reject()
    })
     request(app)
        .put('/users/foobar')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})

test('expect {test:1}', done =>{
    usersServices.delete.mockImplementation(()=>{
        return Promise.resolve()
    })
     request(app)
        .delete('/users/foobar')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(200)
            done();
        })
      

})

test('expect {test:1}', done =>{
    usersServices.delete.mockImplementation(()=>{
        return Promise.reject()
    })
     request(app)
        .delete('/users/foobar')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})

test('expect {test:1}', done =>{
    usersServices.read.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .get('/users/orders/1')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(200)
            done();
        })
    //     .catch(()=>{
    //         // expect(404).toBe(404)
    //         done()
    // })

})

test('expect {test:1}', done =>{
    usersServices.read.mockImplementation(()=>{
        return Promise.reject()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .get('/users/orders/1')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})



