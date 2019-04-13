const request = require('supertest');
const {app} = require('../app.js');

jest.mock('../services/dbServices');
const db = require('../services/dbServices');

jest.mock('../services/usersServices');
const {usersServices} = require('../services/usersServices');

jest.mock('../services/productServices');
const {productServices} = require('../services/productServices');

jest.mock('../services/purchaseServices');
const {purchasesServices} = require('../services/purchaseServices');


test('expect {test:1}', done =>{
    usersServices.create.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .post('/users')
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
    usersServices.create.mockImplementation(()=>{
        return Promise.reject()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .post('/users')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
    //     .catch(()=>{
    //         // expect(404).toBe(404)
    //         done()
    // })

})


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
    usersServices.readUser.mockImplementation(()=>{
        return Promise.resolve()
    })
     request(app)
        .post('/users/uid')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(200)
            done();
        })
   

})

test('expect {test:1}', done =>{
    usersServices.readUser.mockImplementation(()=>{
        return Promise.reject()
    })
     request(app)
        .post('/users/uid')
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

test('expect {test:1}', done =>{
    productServices.create.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .post('/product')
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
    productServices.create.mockImplementation(()=>{
        return Promise.reject()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .post('/product')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
    //     .catch(()=>{
    //         // expect(404).toBe(404)
    //         done()
    // })

})


test('expect {test:1}', done =>{
    productServices.read.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .get('/product/bb/product')
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
    productServices.read.mockImplementation(()=>{
        return Promise.reject()
    })
     request(app)
        .get('/product/bb/product')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})

test('expect {test:1}', done =>{
    productServices.read.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .get('/product/bb/product/1')
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
    productServices.read.mockImplementation(()=>{
        return Promise.reject()
    })
     request(app)
        .get('/product/bb/product/1')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})

test('expect {test:1}', done =>{
    productServices.update.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .put('/product/bb/product/1')
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
    productServices.update.mockImplementation(()=>{
        return Promise.reject()
    })
     request(app)
        .put('/product/bb/product/1')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})

test('expect {test:1}', done =>{
    productServices.delete.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .delete('/product/bb/product/1')
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
    productServices.delete.mockImplementation(()=>{
        return Promise.reject()
    })
     request(app)
        .delete('/product/bb/product/1')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
      

})


test('expect {test:1}', done =>{
    purchasesServices.create.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .post('/purchase')
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
    purchasesServices.create.mockImplementation(()=>{
        return Promise.reject()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .post('/purchase')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(400)
            done();
        })
    //     .catch(()=>{
    //         // expect(404).toBe(404)
    //         done()
    // })

})