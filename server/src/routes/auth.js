const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');



const authMiddleware = require('../middleware/auth');
const authController = require('../controllers/auth');


router.get('/', authMiddleware, authController.getAuth);

router.post('/',
    [
        check('email', 'please include valid email address').isEmail(),
        check('password', 'Password is requied').exists()
    ],
    authController.postAuth
);


module.exports = router;