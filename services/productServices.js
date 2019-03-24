const {db} = require('./dbServices')
const productsServices = {}

//Creates a product
productsServices.create=(seller_id,description, duration,location, type, name, price, images)=>{
    return db.any('INSERT INTO product (seller_id,description, duration,location, type, name, price, images)', {seller_id,description, duration,location, type, name, price, images})
    
    }
//Gets a specific product by product id 
productsServices.read=(id)=>{
        // const id = 5
    return db.one('SELECT * FROM products WHERE id=${id}', {id})
    }

//Get all products of a seller
productsServices.read=(seller_id)=>{
        // const id = 5
    return db.one('SELECT * FROM products WHERE seller_id=${seller_id}', {seller_id})
    }

//Update a product
productsServices.update=(seller_id,description, duration,location, type, name, price, images)=>{
    return db.any('UPDATE products SET description=${description} , duration=${duration}, location=${location}, type=${type}, name=${name}, price=${price},  images=${images}', {description, duration,location, type, name, price, images})
    }

//Delete a product
productsServices.delete=(id)=>{
    return db.any('DELETE FROM products WHERE id=${id}', {id})
    }


module.exports={ productsServices }