const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Order = new Schema({
    Name: { type: String },
    Price: { type: String },
    Diachi: { type: String },
    Quan: { type: String }
})

module.exports = mongoose.model('Order', Order)