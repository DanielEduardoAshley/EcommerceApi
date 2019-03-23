const {db} = require('./dbServices')
const usersServices = {}

usersServices.create=(name , email, address, number, country, state, zip, cc,age,type, description, shopname)=>{
return db.any('INSERT INTO users (name , email, address, number, country, state, zip, cc,age,type, description, shopname) VALUES (${name} , ${email}, ${address}, ${number}, ${country}, ${state}, ${zip}, ${cc},${age},${type}, ${description}, ${shopname}', {name , email, address, number, country, state, zip, cc,age,type, description, shopname})

}



usersServices.read=(id)=>{
    // const id = 5
return db.any('SELECT * FROM users WHERE id=${id}', {id})
}

usersServices.update=(name , email, address, number, country, state, zip, cc,age,type, description, shopname)=>{
return db.any('UPDATE users SET name=${name} , email=${email}, address=${address}, number=${number}, country=${country}, state=${state}, zip=${zip}, cc=${cc},age=${age},type=${type}, description=${description}, shopname=${shopname}', {name , email, address, number, country, state, zip, cc,age,type, description, shopname})
}

usersServices.delete=(id)=>{
return db.any('DELETE FROM users WHERE id=${id}', {id})
}


module.exports={ usersServices}