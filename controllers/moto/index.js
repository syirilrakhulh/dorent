const Moto = require('../../models').Moto
const Admin = require('../../models').Account

class motoController{
    static showData(req, res){

        Admin.findByPk(req.params.id)
        .then((data) => {
            res.render('admin', {data})
        })
    }
}

module.exports = motoController