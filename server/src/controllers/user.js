const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
// const config = require('config');
const mongoose = require('mongoose');

const User = require('../models/user')



/**
 * @route       POST api/user
 * @description Register user
 * @access      Public => no need token
 */

exports.user_signup = (req, res, next) => {
    User.find({ email: req.body.email }).exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                console.log(result)
                                res.status(201).json({
                                    message: 'User Created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                })
            }
        })
}

exports.user_login = (rea, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0].id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: '1h'
                        }

                    )
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token
                    });
                }
                return res.status(401).json({  //password incorrect
                    message: 'Auth failed'
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.user_delete = (req, res, next) => {
    User.remove({
        _id: req.params.userId
    }).exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}
// exports.postUser = async (req, res) => { // async=> work in sync way
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { name, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email })
//         console.log('user', user)
//         // See if user exists
//         if (user) {
//             console.log('user', user)
//             return res.status(400).json({
//                 errors: [{ msg: 'User already exists' }]
//             });
//         }
//         //avatar image if image not exixts
//         const avatar = gravatar.url(email, {
//             s: '200',
//             r: 'pg',
//             d: 'mm'
//         })
//         //save  into satabase
//         user = new User({
//             name,
//             email,
//             password
//         })

//         /**encrypt  password*/
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//         await user.save();  //return promise so we use await
//         /*Return  jsonwebtoken*/
//         const payload = {
//             user: {
//                 id: user.id
//             }
//         };
//         jwt.sign(payload, 'mysecrettoken', { expiresIn: 360000 },
//             (err, token) => {
//                 if (err) throw err;
//                 // if (err) {
//                 //     return console.error(err.message);
//                 // }
//                 res.json({ token });
//             }
//         );
//         // res.send('User Registered');
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

