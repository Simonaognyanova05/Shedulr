module.exports = (req, res) => {
    res.render('categories', { title: 'Categories page', user: req.session.user })
} 