
class showPage {
    static showPage(req, res){
        if(req.session.user){
            if(req.session.user.role == "Admin"){
                res.render('profile/admin', {data: req.session.user})
            } else if(req.session.user.role == "User"){
                res.render('profile/user', {data: req.session.user})
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