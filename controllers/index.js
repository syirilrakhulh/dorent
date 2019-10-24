const Moto = require('../models').Moto
const Account = require('../models').Account
const listMoto = require('../helpers/typeMoto')

class showPage {
    static showPage(req, res) {
        /** SESSION */
        if (req.session.user) {
            if (req.session.user.role == "Admin") {

                console.log(req.body)

                Account.findByPk(req.session.user.id)
                    .then((data) => {
                        console.log(req.session.user)
                        res.render('profile/admin', { data: req.session.user })
                    })
                    .catch((err) => {
                        res.send(err.message)
                    })

                /** USER ACCOUNt */
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