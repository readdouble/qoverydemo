const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("coucou");
  const { Client } = require('pg');
  /*

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'testdb',
        password: '1234abcd',
        port: 5432,
    });

client.connect();
*/
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
