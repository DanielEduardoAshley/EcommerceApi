const {db} = require('./dbServices')
const ordersServices = {}

ordersServices.create=(product_id,purchase_id, quantity, descriptions, buyer_guest_id)=>{
    return db.any('INSERT INTO orders (product_id,purchase_id, quantity, descriptions, buyer_guest_id)', {product_id,purchase_id, quantity, descriptions, buyer_guest_id})
    
    }

module.exports={ ordersServices }