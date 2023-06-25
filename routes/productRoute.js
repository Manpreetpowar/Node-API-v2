const express  = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');


//Products module routes
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports = router;