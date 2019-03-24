const {db} = require('./dbServices')
const purchasesServices = {}

purchasesServices.create=(users_id, totalamount, guest_info)=>{
    return db.any('INSERT INTO purchase (users_id, totalamount, guest_info)', {users_id, totalamount, guest_info})
    
    }


module.exports= { purchasesServices }