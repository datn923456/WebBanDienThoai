const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
    username: { type: String },
    password: { type: String }
}, { collection: 'admins' })



module.exports = mongoose.model('Admin', Admin)