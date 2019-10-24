const Moto = require('../models').Moto
const Account = require('../models').Account
const listMoto = require('../helpers/typeMoto')

class showPage {
    static showPage(req, res) {
        if (req.session.user) {
            if (req.session.user.role == "Admin") {
                res.render('profile/admin', { data: req.session.user })
            } else if (req.session.user.role == "User") {
                // console.log(req.session.user.id)
                let list
                Moto.findAll({ where: { status: "available" } })
                    .then((data) => {
                        // HELPER LIST
                        list = listMoto(data)
                        res.render('profile/user', { data: req.session.user, list })
                        return Account.findByPk(req.session.user.id)
                    })
                    .then((data) => {
                        // console.log(data)
                        // console.log(req.body.topUp)
                    })
                    .catch((err) => {
                        console.log(err.message)
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