const express = require('express');

const routes = express.Router();

const ProductControllers = require('./controllers/ProductController')

routes.get('/products', ProductControllers.index);

module.exports = routes;
