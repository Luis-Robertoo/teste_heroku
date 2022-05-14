const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
    res.send('olá mundo, começo das coisas')
})

server.get('/tempo', (req, res) => {
    res.send(mostraVar())
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