const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const pool = require('./auth/auth');
const balance = require('./balance');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/transaction/get', (req, res) => {
    const SELECT = `SELECT * FROM finances;`

    pool.query(SELECT, (err, result) => {
        res.send(result);
    })
})

app.post('/transaction/add', (req,res) => {
    const DESCRIPTION = req.body.description;
    const VALUE = req.body.value;
    const DATE = req.body.date;

    const INSERT = `INSERT INTO finances(description, value, date)
    VALUES (?,?,?);`

    pool.query(INSERT, [DESCRIPTION, VALUE, DATE] ,(err, result) => {
        if(err) console.log(err);
    })
});

app.delete('/transaction/delete/:id', (req, res) => {
    const id = req.params.id

    const DELETE = `DELETE FROM finances
    WHERE id = '${id}'`

    pool.query(DELETE, (err, result) => {
        if(err) return console.log(err);
    })
})

balance(app);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))