const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hello nodejs server!</h1>');
});

console.clear();
console.log('Server in port 7001');
server.listen(7001);



