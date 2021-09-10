const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3030;

const connection = mysql.createConnection({
    localhost: 'host',
    user: 'root',
    password: '',
    database: 'todolist'
})

app.use(cors());
app.use(express.json());


// Inserimento:
app.post('/inserimento', async (req, res) => {
    const titolo = req.body.titolo;
    const descrizione = req.body.descrizione;
    connection.query("INSERT INTO listatodo (id, titolo, descrizione) VALUES (null, ?, ?)", [titolo, descrizione], (err, result, fields) => {
        if (err) {
            console.log(err)
            return res.json({ msg: 'Inserimento errato!' })
        } else {
            return res.json({ msg: "Inserimento avvenuto con sucesso!" })
        }
    })
})

// Visione della lista completa
app.get('/lista', (req, res) => {
    connection.query(`SELECT * FROM listatodo`, (err, result, fields) => {
        if (err) {
            console.log(err)
            return res.json({ msg: "Nessuna lista" })
        }
        return res.json(result)
    })
})

// Codice per il delete di una nota
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM listatodo WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
            res.json({ err })
        } else {
            console.log('Cancellazione avvenuta con successo')
        }
    })
    res.json({ msg: "Eliminato con successo!" })
})
// app.delete('/delete', async(req, res) => {
//     connection.query(`DELETE FROM listatodo WHERE id = ${req.body.id}`, (err, result) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log('Cancellazione avvenuta con successo');
//             return res.json({ status: false })
//         }
//     })
// })

// Codice per aggiornamento di un record
app.post('/aggiornaNota/:id', (req, res) => {
    const id = req.params.id;
    const titolo = req.body.titolo;
    const descrizione = req.body.descrizione;
    console.log(titolo, descrizione)
    connection.query(`UPDATE listatodo SET titolo="${titolo}", descrizione="${descrizione}" WHERE id=${id}`, (err, result) => {
        if (err) {
            console.log(err)

        } else {
            console.log('Aggiornamento avvenuto con successo')

        }
    })
    res.json({ msg: "Aggiornato con successo!" })
})





app.listen(PORT, () => {
    console.log(`Server lives on port ${PORT}`)
})