const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, require: true }
})

// UserSchema.pre('save', function (next) {
//     if (!this.isModified('password')) { //password field is not modified then return next()
//         return next();
//     }
//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) return next(err);
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             if (err) return next(err);
//             this.password = hash;
//             next();
//         })
//     })
// })


module.exports = mongoose.model('User', userSchema);