const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usertDetailsSchema = new Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    phoneNumber: Number
})

module.exports = mongoose.model('UserDetails', usertDetailsSchema)