const express = require('express');
const mongoose = require('mongoose');

const server = express();

const dbase = 'node-api';
mongoose.connect(`mongodb://localhost:27017/${dbase}`, { useUnifiedTopology: true, useNewUrlParser: true});

server.get('/', (req, res) => {
    res.send('<h1>Hello nodejs server!</h1>');
});

console.clear();
console.log('Server in port 7001');
server.listen(7001);



