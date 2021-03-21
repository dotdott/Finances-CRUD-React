const pool = require("./auth/auth");

const BALANCE = (app) => {
    app.get('/balance/get', (req, res) => {
        const SELECT = `SELECT * FROM balance;`

        pool.query(SELECT, (err, result) => {
            res.send(result);
        })
    });

    app.post('/balance/add', (req, res) => {
        const value = req.body.value;

        const VALUES = `INSERT INTO balance(value)
        VALUES (?);`

        pool.query(VALUES, [value], (err, result) => {
            if(err) return console.log(err);
        })
    });

    app.delete('/balance/delete/:id', (req, res) => {
        const ID = req.params.id;

        const DELETE = `DELETE FROM balance
        WHERE id = '${ID}';`

        pool.query(DELETE, (err, result) => {
            if(err) return console.log(err)
        })
    })
}

module.exports = BALANCE;