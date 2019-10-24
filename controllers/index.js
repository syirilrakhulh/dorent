const Moto = require('../models').Moto
const Account = require('../models').Account
const listMoto = require('../helpers/typeMoto')

class showPage {
    static showPage(req, res) {
        if (req.session.user) {
            if (req.session.user.role == "Admin") {
                Account.findByPk(req.session.user.id)
                .then((data) => {
                    res.render('profile/admin', { data: req.session.user })
                })
                .catch((err) => {
                    res.send(err.message)
                })

            } else if (req.session.user.role == "User") {
                let list
                Moto.findAll({ where: { status: "available" } })
                    .then((data) => {
                        // HELPER LIST
                        list = listMoto(data)
                        res.render('profile/user', { data: req.session.user, list })
                        return Account.findByPk(req.session.user.id)
                    })
                    .then((data) => {
                    })
                    .catch((err) => {
                        res.send(err.message)
                    })
            }
        } else {
            res.render('')
        }
    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = showPage