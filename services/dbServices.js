const pgp = require('pgp-promise')({});
const db = pgp('postgres://localhost/shop');

module.exports = { db}