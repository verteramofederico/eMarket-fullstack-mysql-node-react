// express y el router
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

// traer el controller
const productsController = require("../controllers/productsController")

// define rutas
//router.get("/productDetail", productsController.ProducDetail);
router.get("/:id", productsController.ProducDetail);
router.get("/productCart", productsController.ProductCart);
router.get("/productCreate", productsController.ProductCreate);
router.get("/productEdit", productsController.ProductEdit);
router.post('/', [upload.single("image")], productsController.store); 
router.put('/', [upload.single("image")], productsController.update); 
router.delete('/:id', productsController.destroy); 


// exporto
module.exports = router; 