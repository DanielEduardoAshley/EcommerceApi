jest.mock('./services/dbServices')
const {usersServices} = require('./services/usersServices')
const {db} = require('./services/dbServices')

test('returns promise', done=>{
db.any.mockImplementation(()=>Promise.resolve())
usersServices.read()
.then((_)=>{
    console.log(db.any.mock.calls)
        expect(db.any.mock.calls[0][0]).toBe('SELECT * FROM users WHERE id=${id}')
        done();
    })
})

test('returns promise', done=>{
    db.any.mockImplementation((...rest)=>Promise.resolve())
    usersServices.read(5)
        .then((response)=>{
            console.log(db.one.mock.calls)
            expect(db.any.mock.calls[1][1]).toEqual({id : 5})
            done();
        })
    })