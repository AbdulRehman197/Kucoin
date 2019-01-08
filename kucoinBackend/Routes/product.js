const productsRouter = require('express').Router();
const mongoose = require('mongoose')
const userData =require('../Controller/products')
// const cc =  require('../criptoCurrencies/criptocurrencies')

// Home Route and Get All Data
productsRouter.get('/getCurrencies',userData.getData )
// productsRouter.get('/product', )
// Create New Data Route
// productsRouter.post('/', userData.postData )
//Edit Data Route
productsRouter.put('/:name', userData.putData )


module.exports = productsRouter;