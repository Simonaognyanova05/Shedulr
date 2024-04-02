module.exports = (req, res) => {
    res.render('housewife', { title: 'Housewife page', user: req.session.user })
} 