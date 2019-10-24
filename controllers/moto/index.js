const Moto = require('../../models').Moto
const Admin = require('../../models').Account

class motoController{
    static showData(req, res){

        Admin.findByPk(req.params.id)
        .then((data) => {
            res.render('admin', {data})
        })
    }

    static add(req, res){
        res.render('add')
    }

    /** ADMIN CREATE MOTO */
    static create(req, res){
        Moto.create({
            platNumber: req.body.platNumber,
            category: req.body.category,
            type: req.body.type,
            price: Number(req.body.price),
            status: 'available'
        })
        .then((moto) => {
            res.send(moto)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

module.exports = motoController