const express = require("express");
const { AllgetProduct, SingleProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router()
const upload = require("../middleware/upload"); 

router.post("/products",upload.single("image"),  createProduct);
router.get("/products", AllgetProduct);
router.get("/products/:id", SingleProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);



module.exports = router;