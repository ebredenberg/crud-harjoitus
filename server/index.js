const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password:'',
    database:'kayttajat'
})

app.get('/hae', (req, res) => {
    db.query("SELECT * FROM henkilot", (err, result) => {
        if(err) {
            console.log(err);
        } else {    
            res.send(result);
        }
    })
})

app.delete('/poista', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM henkilot WHERE id = ?", id, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})


app.post('/luo', (req, res) => {
    const nimi = req.body.nimi;
    const titteli = req.body.titteli;
    const sahkopostiosoite = req.body.sahkopostiosoite;
    const puhelinnumero = req.body.puhelinnumero;
    const id = req.body.id;

    if (id != "") {
        db.query("UPDATE henkilot set nimi = ?, puhelinnumero = ?, sahkopostiosoite = ?, titteli = ? WHERE id = ?", 
        [nimi, puhelinnumero, sahkopostiosoite, titteli, id], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    } else {
        db.query("INSERT INTO henkilot (nimi, puhelinnumero, sahkopostiosoite, titteli) values (?,?,?,?)", 
        [nimi, puhelinnumero, sahkopostiosoite, titteli], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    }
})

app.get('/haehenkilo/:id', (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM henkilot WHERE id = ?", id, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})


app.listen(3001, () => {
    console.log('Palvelin toimii') 
})