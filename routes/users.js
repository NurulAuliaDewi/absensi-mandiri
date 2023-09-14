var express = require('express');
var router = express.Router();
const userController = require('../controller'); // Mengimpor sebagai objek
const verify = require('../middleware/VerifyToken');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../images');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({storage: storage});
 
// GET data user
router.get('/user', userController.getDataUser);
router.get('/user/:username', verify.verifyToken, userController.getDataByUsername);
router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.get('/token', userController.refreshtoken);
router.delete('/user/logout', userController.logout);
router.put('/user/edit', userController.edit);

module.exports = router;
