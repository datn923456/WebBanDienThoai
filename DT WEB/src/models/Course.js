const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Course = new Schema({
    name: { type: String },
    price: { type: String },
    thumbnail: { type: String },
    mota: { type: String },
    mh: { type: String },
    hdh: { type: String },
    camS: { type: String },
    camT: { type: String },
    chip: { type: String },
    memory: { type: String },
    ram: { type: String },
    slug: { type: String, slug: 'name' }
})

module.exports = mongoose.model('Course', Course)