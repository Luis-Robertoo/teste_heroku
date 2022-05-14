const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('olá mundo, começo das coisas')
})

server.listen(5000, () => {
    console.log('iniciei')
})