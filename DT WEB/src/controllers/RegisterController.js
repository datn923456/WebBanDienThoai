const userModel = require('../models/user')

class RegisterController {


    index(req, res) {
        var username = req.body.username
        var password = req.body.password
        var repassword = req.body.repassword
        var hoten = req.body.hoten
        var sodienthoai = req.body.sdt
        var email = req.body.email
        var diachi = req.body.diachi
        var ngaysinh = req.body.ngaysinh

        userModel.findOne({
                username: username
            })
            .then(data => {
                if (data) {
                    console.log('user da ton tai')
                } else {
                    return userModel.create({
                        username: username,
                        password: password,
                        repassword: repassword,
                        hoten: hoten,
                        sodienthoai: sodienthoai,
                        diachi: diachi,
                        email: email,
                        ngaysinh: ngaysinh
                    })
                }
            })
            .then(data => {
                console.log('dang ky tai khoan thanh cong');
                res.redirect('/');
            })
            .catch(err => {
                res.status(500).json('co loi ben server');
                res.redirect('/');
            })
    }

}

module.exports = new RegisterController()