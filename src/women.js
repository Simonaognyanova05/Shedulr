module.exports = (req, res) => {
    res.render('women', { title: 'Women page', user: req.session.user })
} 