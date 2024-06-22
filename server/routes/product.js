const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

//define routes (GET, POST, PUT, DELETE)
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

router.delete('/', productController.deleteAll);
//search work?
router.get('/search', productController.getProductsByName);

module.exports = router;