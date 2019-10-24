const Account = require('../../models').Account
const bcrypt = require('../../helpers/hashPassword')

class accountController {
    static index(req, res) {
        res.render('register')
    }

    static addAdmin(req, res) {
        res.render('register/admin')
    }

    static createAdmin(req, res) {
        Account.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
            username: req.body.username,
            role: 'Admin',
            password: req.body.password
        })
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static addUser(req, res) {
        res.render('register/user')
    }

    static createUser(req, res) {
        Account.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
            username: req.body.username,
            role: 'User',
            balance: 0,
            password: req.body.password
        })
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static loginPage(req, res) {
        res.render('login')
    }

    static login(req, res) {
        Account.findOne({ where: { username: req.body.username} })
            .then( data => {
                if (bcrypt.compare(req.body.password, data.password)) {
                    req.session.user = {
                        id : data.id,
                        firstName : data.firstName,
                        lastName : data.lastName,
                        address : data.address,
                        createdAt : data.createdAt,
                        balance : data.balance,
                        role : data.role,
                    }
                    res.redirect('/')
                } else {
                    res.send('wrong password')
                }
            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static topupPage(req, res) {
        res.render('topup')
    }

    static topup(req, res) {
        Account.findByPk(req.params.id)
            .then(data => {
                data.topup(req.body.topup)
                res.send(data)
            })
    }
}

module.exports = accountController