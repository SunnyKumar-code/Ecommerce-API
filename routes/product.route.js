const express = require("express")
const router = express.Router();
const productController = require("../controllers/product.controller.js")

router.post("/create",productController.productCreate);
router.get("/list",productController.productLists);
router.get("/:id",productController.productDetail);
router.post("/add-review",productController.addReview)

module.exports=router;