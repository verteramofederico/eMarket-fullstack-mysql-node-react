const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
router.get('/', productsAPIController.index);
router.get('/:id', productsAPIController.detail);

module.exports = router;