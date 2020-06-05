const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT2,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?, ?, ?, ?, ?, ?, ?);
    // `
    // const values = [

    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log('Cadastrado com sucesso')
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log('Aqui estão seus registros:')
    //     console.log(rows)
    // })

    db.run(`DELETE FROM places WHERE id = ?`, [6], function(err) {
        if(err) {
            return console.log(err)
        }

        console.log('Registro deletado com sucesso')
    })
})
