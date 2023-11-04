const express = require("express");
const { CreateProduct, ReadProduct, ReadProductById, DeleteProduct, UpdateProduct } = require("../controllers/productController");
const router = express.Router();

router.post("/CreateProduct", CreateProduct)
router.get("/ReadProduct", ReadProduct)
router.get("/ReadProductById/:id", ReadProductById)
router.get("/DeleteProduct/:id", DeleteProduct)
router.post("/UpdateProduct/:id", UpdateProduct)

module.exports=router;