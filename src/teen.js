module.exports = (req, res) => {
    res.render('teen', { title: 'Teen page', user: req.session.user })
} 