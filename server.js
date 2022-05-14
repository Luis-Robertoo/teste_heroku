const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
    res.send('olá mundo, começo das coisas')
})

server.listen(PORT, () => {
    console.log('iniciei')
})