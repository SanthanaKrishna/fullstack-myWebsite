const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const checkAuth = require('../middleware/auth');

const UserController = require('../controllers/user');
/**
 * @route       POST api/user
 * @description Register user
 * @access      Public => no need token
 */

// router.post('/',
//     [
//         check('name', 'name is required').not().isEmpty(),
//         check('email', 'pls include vaild email').isEmail(),
//         check('password', 'pls enter a password with 6 or more char').isLength({ min: 6 })
//     ],
//     userController.postUser
// );
//409-> confit resource 422//cannot process
router.post('/signup', UserController.user_signup)

router.post('/login', UserController.user_login);
router.delete('/:userId', checkAuth, UserController.user_delete);

module.exports = router;