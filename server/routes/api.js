const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const router = express.Router();

// GET ALL PRODUCTS
router.get('/allProducts', productController.getProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// GET FIRST 8 IMAGES
router.get('/topProducts', productController.getTopProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// GET CATEGORY LIST
router.get('/categoryList', productController.getCategoryList, (req, res) => {
  res.status(200).json(res.locals);
});

// GET SPECIFIC CATEGORY PRODUCTS
router.get('/categoryProducts', productController.categoryProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ADD NEW PRODUCTS
router.post('/product', productController.addProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ADD NEW USER TO DATABASE
router.post('/signup', userController.addUser, (req, res) => {
  res.status(200).json('Your account has been successfully added.');
});

// GET ALL ITEMS THAT PERTAIN TO THE SEARCHED NAME OF ITEM
router.post('/productSearch', productController.getSearchedProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ============ !!!DANGER DANGER DANGER!!! ============
// DELETE ALL PRODUCS FROM DATABASE
router.delete('/product', productController.deleteProducts, (req, res) => {
  res.status(200).json('database cleaned!');
});

module.exports = router;
