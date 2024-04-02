module.exports = (req, res) => {
    res.render('parents', { title: 'Parents page', user: req.session.user })
} 