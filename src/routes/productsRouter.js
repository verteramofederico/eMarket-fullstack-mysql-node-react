// express y el router
const express = require("express");
const router = express.Router();

// traer el controller
const productsController = require("../controllers/productsController")

// define rutas
router.get("/productDetail", productsController.ProducDetail);
router.get("/productCar", productsController.ProductCar);
router.get("/productEdit", productsController.ProductEdit)

// exporto
module.exports = router; 