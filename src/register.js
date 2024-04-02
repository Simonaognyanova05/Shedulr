module.exports = (req, res) => {
    res.render('register', { title: 'Register page', user: req.session.user })
} 