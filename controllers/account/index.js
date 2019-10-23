const Account = require('../../models').Account

class accountController{
    static addAdmin(req, res){
        res.render('/register/')
    }

    static createAdmin(req, res){
        let data = req.body
        console.log(data)
        Account.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
            username: req.body.phone,
            role: 'Admin',
            password: req.body.password
        })
        .then(() => {
            res.redirect('/')
        })
    }
}

module.exports = accountController