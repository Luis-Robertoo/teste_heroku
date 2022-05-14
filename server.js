const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('olá mundo')
})

server.listen(5000, () => {
    console.log('iniciei')
})