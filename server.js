const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

server.get('/', (req, res) => {
    res.send('olá mundo, começo das coisas')
})

server.get('/tempo', (req, res) => {
    res.send(mostraVar())
})

server.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM teste');

      res.send("resultados " + result);
    }catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
  })

server.listen(PORT, () => {
    console.log('iniciei')
})



mostraVar = () => {
    let resultado = '';
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
        resultado += i + ' ';
    }
    return resultado;
}