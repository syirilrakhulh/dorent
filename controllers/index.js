const Moto = require('../../models').Moto
const listMoto = require('../../helpers/typeMoto')

class showPage {
    static showPage(req, res){
        if(req.session.user){
            if(req.session.user.role == "Admin"){
                res.render('profile/admin', {data: req.session.user})
            } else if(req.session.user.role == "User"){

                Moto.findAll({where: {status: "available"}})
                .then((data) => {
                    // HELPER LIST
                    let list = listMoto(data)
                    res.render('profile/user', {data: req.session.user, list})
                    
                })
                .catch((err) => {
                    console.log(err.message)
                })
            }
        } else {
            res.render('')
        }
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = showPage