module.exports = (req, res) => {
    res.render('login', { title: 'Login page', user: req.session.user })
} 