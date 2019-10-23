const Account = require('../../models').Account

class accountController{
    static addAdmin(req, res){
        res.render('register/admin')
    }

    static createAdmin(req, res){
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
        .catch((err)=>{
            console.log(err.message)
        })
    }

    static addUser(req, res){
        res.render('addUser')
    }

    static createUser(req, res){
        Account.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
            username: req.body.phone,
            role: 'User',
            balance: 0,
            password: req.body.password
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

module.exports = accountController