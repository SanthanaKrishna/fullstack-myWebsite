const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usertDetailsSchema = new Schema({
    userId: Number,
    name: String,
    rollNo: Number,
})

module.exports = mongoose.model('UserDetails', usertDetailsSchema)