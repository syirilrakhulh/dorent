const Account = require('../../models').Account

class accountController{
    static index(req, res){
        res.render('register')
    }

    static addAdmin(req, res){
        res.render('register/admin')
    }

    static createAdmin(req, res){
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
        .catch((err)=>{
            console.log(err.message)
        })
    }

    static addUser(req, res){
        res.render('register/user')
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

    static loginPage(req, res){
        res.render('formlog')
    }

    static login(req, res){
        Account.findOne({where:{username: req.body.username, password: req.body.password}})
            .then((data) => {
                if(data){
                    if(data.role == "Admin"){
                        res.redirect(`/admin/${data.id}`)
                    } else if(data.role == "User"){
                        res.redirect(`/user/${data.id}`)
                    }
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

module.exports = accountController