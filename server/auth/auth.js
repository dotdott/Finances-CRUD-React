const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bc84b0945f8f56',
    password: '400ac278',
    database: 'heroku_b31b426587faa7f'
})

module.exports = pool;