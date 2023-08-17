const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: { type: String },
    password: { type: String },
    repassword: { type: String },
    hoten: { type: String },
    ngaysinh: { type: Date },
    sodienthoai: { type: String },
    diachi: { type: String },
    email: { type: String },
    sluguser: { type: String, sluguser: 'username' }
}, { collection: 'users' })



module.exports = mongoose.model('User', User)