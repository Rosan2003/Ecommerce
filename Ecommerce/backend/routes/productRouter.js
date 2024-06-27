const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const {getProduct,addProduct,updateProduct, deleteProduct} = require("../controller/productController");

const router = express.Router();

router.get("/",getProduct);
router.post("/",checkAuth,addProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;