const Account = require('../../models').Account
const Moto = require('../../models').Moto
const MotoRent = require('../../models').MotoRent
const bcrypt = require('../../helpers/hashPassword')
const listMoto = require('../../helpers/typeMoto')

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
        Account.findOne({ where: { username: req.body.username } })
            .then(data => {
                if (bcrypt.compare(req.body.password, data.password)) {
                    req.session.user = {
                        id: data.id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        address: data.address,
                        createdAt: data.createdAt,
                        balance: data.balance,
                        role: data.role,
                        phone: data.phone
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

    static addRent(req, res) {
        Moto.findAll({ where: { status: "available" } })
            .then((data) => {
                // HELPER LIST
                let list = listMoto(data)
                res.render('profile/user', { list })

            })
            .catch((err) => {
                res.send(err.message)
            })
    }

    static createRent(req, res) {
        let global = req.body
        let user = req.session.user

        if (global.topup) {
            Account.topup(global.topup, user.id)
            // res.render('profile/user')
            res.redirect('/')

        } else if (user.role == 'user' || user.role == 'User') {
            Moto.findOne({ where: { type: global.type } })
                .then((data) => {
                    return MotoRent.create({
                        MotoId: data.id,
                        AccountId: user.id,
                        start: global.start,
                        finish: global.finish,
                        status: 'on rent',
                        price: data.price
                    })
                })
                .then(() => {
                    res.redirect('/')
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
        else if (user.role == 'admin' || user.role == 'Admin') {
            let currentStatus = 'available'
            if (global.quota <= 0) {
                currentStatus = 'not available'
            }
            Moto.create({
                type: global.type,
                category: global.category,
                price: Number(global.price),
                quota: Number(global.quota),
                status: currentStatus
            })
                .then(() => {
                    res.redirect('/')
                })
                .catch((err) => {
                    console.log(err)
                })
            
            Moto.findAll()
    }
}
}

module.exports = accountController