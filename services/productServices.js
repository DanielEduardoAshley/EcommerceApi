const {db} = require('./dbServices')
const productServices = {}

//Creates a product
productServices.create=(seller_id,description, duration,location, type, name, price, images)=>{
    return db.none('INSERT INTO product (seller_id,description, duration,location, type, name, price, images) VALUES (${seller_id}, ${description}, ${duration}, ${location}, ${type}, ${name}, ${price}, ${images})', {seller_id,description, duration,location, type, name, price, images})
    
    }
//Gets a specific product by product id 
productServices.read=(id)=>{
        // const id = 5
    return db.one('SELECT * FROM product WHERE id=${id}', {id})
    }

//Get all products of a seller
productServices.read=(seller_id)=>{
        // const id = 5
    return db.one('SELECT * FROM product WHERE seller_id=${seller_id}', {seller_id})
    }


productServices.searchproducts=(searchquery, type)=>{
    const qdes = `%${searchquery}%`
// const qdes = '%John%'
const sql = 'SELECT * FROM product WHERE type=${type} AND name LIKE $[qdes] OR description LIKE $[qdes]' 
    return db.any(sql, {type, qdes})
    }
//Update a product
productServices.update=(seller_id,description, duration,location, type, name, price, images)=>{
    return db.any('UPDATE products SET description=${description} , duration=${duration}, location=${location}, type=${type}, name=${name}, price=${price},  images=${images}', {description, duration,location, type, name, price, images})
    }

//Delete a product
productServices.delete=(id)=>{
    return db.any('DELETE FROM products WHERE id=${id}', {id})
    }


module.exports={ productServices }