const {db} = require('./dbServices')
const purchasesServices = {}

purchasesServices.create=(users_id, receipt, totalamount, name,address,city,state,zip,country,cc)=>{
  console.log('ppur',typeof users_id,typeof receipt,typeof totalamount, typeof name,typeof address, typeof city,typeof state,typeof zip,typeof country,typeof cc)
  return  db.any('INSERT INTO purchase (users_id, receipt, totalamount, name, address, city, state,zip, country,cc) VALUES (${users_id}, ${receipt},${totalamount},${name},${address},${city},${state},${zip},${country},${cc});' ,{users_id, receipt,totalamount,name,address,city,state,zip,country,cc} )

    
} 

purchasesServices.read=(id)=>{
    return  db.any('SELECT * FROM purchase  JOIN orders ON purchase.ID = purchase_id JOIN product ON product.id = product_id)', {id})
      
  }

purchasesServices.readAll=(user_id)=>{
    return  db.any('SELECT * FROM purchase JOIN orders ON purchase.id = purchase_id JOIN product ON purchase.id = product_id WHERE user_id = purchase_id', {user_id})
      
  }

module.exports= { purchasesServices }