const request = require('supertest')
const {app} = require('../app.js')

test('should get back a string 400 if empty', done =>{
    request(app)
    .post('/')
    .send({})
    .catch((response)=>{
        expect(response.status).tobe(400);
        done();


    })




})

test('expect to get back 200 if all informatino sent',done=>{
    request(app)
    .post('/')
    .send({

        name : 'a', 
        email : 'b', 
        address : 'c', 
        number : 'd',
        country : 'e', 
        state: 'f', 
        zip: 'g', 
        cc: 'h',
        age: 'i',
        type: 'j',
        descritpion : 'k', 
        shopname : 'l'
    })
    .then((response)=>{
        expect(reponse.status).tobe(204);
        done();
    })

})