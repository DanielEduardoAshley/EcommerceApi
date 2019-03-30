const {db} = require('./dbServices')
const ordersServices = {}

ordersServices.create=(product_id, purchase_id, quantity, descriptions, buyer_guest_id)=>{
    return  db.any('INSERT INTO orders(product_id, purchase_id, quantity, descriptions, buyer_guest_id) VALUES (product_id=${product}, purchase_id=${purchase_id}, quantity=${quantity}, descriptions=${descriptions}, buyer_guest_id=${buyer_guest_id});', {product_id, purchase_id, quantity, descriptions, buyer_guest_id})
      
  } 
  
ordersServices.read=(order_id)=>{
      return  db.any('SELECT * FROM orders orders.id = order_id )', {order_id} )
        
  }
  
 

module.exports= { orderServices }