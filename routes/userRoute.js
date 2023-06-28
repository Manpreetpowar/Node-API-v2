const express = require('express');
const router = express();
const bodyParser = require('body-parser');    //To get data from form body
const User = require('../models/userModel');
const {registerUser,userLogin} = require('../controllers/userController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

const multer = require("multer");
const path = require("path");

router.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,path.join(__dirname,'../public/userImages'),function(error,success){
            if(error) throw error
        });
    },
    filename:function(req,file,cb){
      const name =   Date.now()+'-'+file.originalname;
      cb(null, name, function(error1,success1){
            if(error1) throw error1;
      });
    }
});

const upload = multer({storage:storage});
const user_controller = require('../controllers/userController');
router.post('/',upload.single('image'),registerUser);
router.post('/login',userLogin);
module.exports = router;