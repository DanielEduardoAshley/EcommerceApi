const {db} = require('./dbServices')
const purchasesServices = {}

purchasesServices.create=(users_id, totalamount, guest_info)=>{
  return  db.any('INSERT INTO purchase (users_id, totalamount, guest_info) VALUES (users_id=${users_id}, totalamount=${totalamount}, guest_id={guest_id});', {users_id, totalamount, guest_info})
    
} 

purchasesServices.read=(id)=>{
    return  db.any('SELECT * FROM purchase  JOIN orders ON purchase.ID = purchase_id JOIN product ON product.id = product_id)', {id})
      
  }

purchasesServices.readAll=(user_id)=>{
    return  db.any('SELECT * FROM purchase JOIN orders ON purchase.id = purchase_id JOIN product ON purchase.id = product_id WHERE user_id = purchase_id', {user_id})
      
  }

module.exports= { purchasesServices }