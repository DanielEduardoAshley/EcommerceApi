const {db} = require('./dbServices')
const usersServices = {}

usersServices.create=(name , email, address, number, country, state, zip, cc,age,type, description, shopname)=>{
return db.any('INSERT INTO users (name , email, address, number, country, state, zip, cc,age,type, description, shopname) VALUES (${name} , ${email}, ${address}, ${number}, ${country}, ${state}, ${zip}, ${cc},${age},${type}, ${description}, ${shopname})', {name , email, address, number, country, state, zip, cc,age,type, description, shopname})

}

usersServices.readUser=(uid)=>{
    // const id = 5
return db.any('SELECT * FROM users WHERE uid=${uid}', {uid});
}


usersServices.read=(username)=>{
    console.log(username)
return db.any('SELECT * FROM users WHERE username=${username}', {username});
}

usersServices.readid=(id)=>{
return db.any('SELECT * FROM users WHERE id=${id}', {id});
}


usersServices.searchbyuser=(userquery)=>{
const qdes = `%${userquery}%`
const sql = 'SELECT * FROM users WHERE name LIKE $[qdes] OR username LIKE $[qdes] OR email LIKE $[qdes]'
return db.any(sql,{qdes})

}

usersServices.update=(name , email, address, number, country, state, zip, cc,age,type, description, shopname)=>{
return db.any('UPDATE users SET name=${name} , email=${email}, address=${address}, number=${number}, country=${country}, state=${state}, zip=${zip}, cc=${cc},age=${age},type=${type}, description=${description}, shopname=${shopname}', {name , email, address, number, country, state, zip, cc,age,type, description, shopname})
}

usersServices.delete=(id)=>{
return db.any('DELETE FROM users WHERE id=${id}', {id})
}


module.exports={ usersServices }