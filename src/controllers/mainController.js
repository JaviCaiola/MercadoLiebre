const mainControllers = {
    showIndex : (req, res)=>{
        res.render('home')
    },
    showRegister : ()=>{
        res.render('registro')
    }
}

module.exports = mainControllers;