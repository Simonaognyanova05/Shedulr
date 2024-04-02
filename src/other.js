module.exports = (req, res) => {
    res.render('other', { title: 'Other page', user: req.session.user })
} 