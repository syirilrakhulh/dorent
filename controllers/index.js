const Moto = require('../models').Moto
const Account = require('../models').Account
const listMoto = require('../helpers/typeMoto')

class showPage {
    static showPage(req, res) {
        /** SESSION */
        if (req.session.user) {
            if (req.session.user.role == "Admin") {

                Account.findByPk(req.session.user.id)
                .then((data) => {
                    return Moto.findAll()
                })
                .then((moto) => {
                    res.render('profile/admin', { data: req.session.user, moto})
                })
                .catch((err) => {
                    res.send(err.message)
                })


                /** USER ACCOUNT */
            } else if (req.session.user.role == "User") {
                let list
                Moto.findAll({ where: { status: "available" } })
                    .then((data) => {
                        // HELPER LIST
                        list = listMoto(data)
                        return Account.findByPk(req.session.user.id)
                    })
                    .then((data) => {

                        
                        
                        return Account.findAll({include: {model: Moto}, where : {id: req.session.user.id}})
                    })
                    .then((data) => {
                        
                        let motos = data[0].Motos
                        res.render('profile/user', { data: req.session.user, list, Motos: motos })
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