const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const server = express();

const dbase = 'node-api';
mongoose.connect(`mongodb://localhost:27017/${dbase}`, { useUnifiedTopology: true, useNewUrlParser: true});

requireDir('./src/models/')

const fakeTest = {
    title : "Fake product",
    description: "Product fake for teste...",
    url: "www.fake.com"
}

const Product = mongoose.model('Product');

server.get('/', (req, res) => {
    Product.create(fakeTest);
    res.send('<h1>Hello nodejs server!</h1>');
});

console.clear();
console.log('Server in port 7001');
server.listen(7001);



