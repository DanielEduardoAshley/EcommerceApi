const {db} = require('./dbServices')
const productServices = {}

//Creates a product
productServices.create=(seller_id,description, duration,location, type, name, price, images)=>{
    return db.one('INSERT INTO product (seller_id,description, duration,location, type, name, price, images) VALUES (${seller_id}, ${description}, ${duration}, ${location}, ${type}, ${name}, ${price}, ${images}) returning id', {seller_id,description, duration,location, type, name, price, images})
    
    }
//Gets a specific product by product id 
productServices.read=(id)=>{
        // const id = 5
    return db.any('SELECT * FROM product WHERE id=${id}', {id})
    }

//Get all products of a seller
productServices.readAll=(seller_id)=>{
    console.log('here as well')
    return db.any('SELECT * FROM product WHERE seller_id=${seller_id}', {seller_id})
    }


productServices.searchproducts=(searchquery, type)=>{
    const qdes = `%${searchquery}%`
// const qdes = '%John%'
const sql = 'SELECT * FROM product WHERE type=${type} AND name LIKE $[qdes] OR type=${type} AND description LIKE $[qdes]' 
    return db.any(sql, {type, qdes})
    }
//Update a product
productServices.update=(product_id,description, duration,location, type, name, price, image)=>{
    return db.any('UPDATE product SET description=${description} , duration=${duration}, location=${location}, type=${type}, name=${name}, price=${price},  images=${image} WHERE id=${product_id}', {product_id,description, duration,location, type, name, price, image})
    }

//Delete a product
productServices.delete=(id)=>{
    return db.none('DELETE FROM product WHERE id=${id}', {id})
    }


module.exports={ productServices }