// express y el router
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productAuthMiddleware = require('../middlewares/productAuthMiddleware');
const validations = require('../middlewares/validateProductCreate'); 

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") || extension.indexOf("jpeg") || extension.indexOf("png") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

//controller
const productsController = require("../controllers/productsController")

//product index
router.get("/create", productAuthMiddleware, productsController.ProductCreate);
router.get("/all/:category?", productsController.ProductAll);
router.get("/edit/:id",productAuthMiddleware, productsController.ProductEdit);
router.get("/editImage/:id",productAuthMiddleware, productsController.ProductEditImage);
router.get("/:id", productsController.ProducDetail);
router.post('/create', upload.single("image"),validations,  productsController.store); 
router.put('/update/:id', productsController.update); 
router.put('/updateImage/:id', [upload.single("image")], productsController.updateImage); 
router.delete('/delete/:id', productsController.destroy); 

module.exports = router; 