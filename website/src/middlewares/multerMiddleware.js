const path = require('path');
const multer = require('multer');

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") || extension.indexOf("jpeg")
            || extension.indexOf("png") || extension.indexOf(".gif") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","users"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

module.exports = upload;