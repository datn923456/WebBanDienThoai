const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/web', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Kết nối thành công!!!')
    } catch (error) {
        console.log('Fail!!!')
    }
}

module.exports = { connect }