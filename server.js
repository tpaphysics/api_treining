const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const server = express();
server.use(cors());
server.use(express.json());

const dbase = 'node-api';
mongoose.connect(`mongodb://localhost:27017/${dbase}`, { useUnifiedTopology: true, useNewUrlParser: true});

requireDir('./src/models/');

server.use('/api',require('./src/routes'));

console.clear();
console.log('Server in port 7001');
server.listen(7001);



