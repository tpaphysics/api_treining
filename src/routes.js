const express = require('express');

const routes = express.Router();

const ProductControllers = require('./controllers/ProductController')

routes.get('/products', ProductControllers.index);
routes.post('/products', ProductControllers.store);

module.exports = routes;
