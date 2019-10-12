const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const userController = require('../controllers/user');
/**
 * @route       POST api/user
 * @description Register user
 * @access      Public => no need token
 */

router.post('/',
    [
        check('name', 'name is required').not().isEmpty(),
        check('email', 'pls include vaild email').isEmail(),
        check('password', 'pls enter a password with 6 or more char').isLength({ min: 6 })
    ],
    userController.postUser
);


module.exports = router;