const {db} = require('./dbServices')
const purchasesServices = {}

// purchasesServices.create=(users_id, totalamount, users_id, totalamount,  product_id,purchase_id, quantity, descriptions, buyer_guest_id=null)=>{
//   return  db.any('INSERT INTO purchase (users_id, totalamount) VALUES (users_id=${users_id}, totalamount=${totalamount}) ; INSERT INTO orders (product_id,purchase_id, quantity, descriptions, buyer_guest_id) VALUES (product_id=${product_id}, purchase_id=${purchase_id}, quantity=${quality}, descriptions=${descriptions}, buyer_guest_id=${buyer_guest_id})', {users_id, totalamount, product_id,purchase_id, quantity, descriptions, buyer_guest_id})
    
// } 

purchasesServices.read=(id)=>{
    return  db.any('SELECT * FROM purchase  JOIN orders ON purchase.ID = purchase_id JOIN product ON product.id = product_id)', {id})
      
  }

purchasesServices.readAll=(user_id)=>{
    return  db.any('SELECT * FROM purchase JOIN orders ON purchase.id = purchase_id JOIN product ON purchase.id = product_id WHERE user_id = purchase_id', {user_id})
      
  }

module.exports= { purchasesServices }