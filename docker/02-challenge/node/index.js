const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'appdb'
};

const connection = mysql.createConnection(dbConfig);

const names = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

function insertRandomName() {
    const randomName = getRandomName();
    connection.query(`INSERT INTO people (name) values('${randomName}')`);
}

function getPeople(callback) {
    connection.query('SELECT * FROM people', callback);
}

function formatPeopleList(result) {
    if (!result) {
        return '<li>Nenhum nome encontrado. Verifique sua conexão com o banco.</li>';
    }

    return result.map(person => `<li>${person.id} - ${person.name}</li>`).join('');
}

app.get('/', (req, res) => {
    try {
        insertRandomName();
        getPeople((err, result) => {
            const nameList = formatPeopleList(result);
            res.send(`<h1>Full Cycle Rocks!</h1><p><ul>${nameList}</ul></p>`);
        });
    } catch (error) {
        console.log(error)        
    }
});

app.listen(port, () => {
    console.log(`Node app running on port ${port}`);
});
