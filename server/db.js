//database module
const { createPool } = require('mysql2/promise')

//creating the pool: the pool is a collection of connections to the database
const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'tasksdb',

}) // close createPool

//exporting the pool
module.exports = {
    pool
    };