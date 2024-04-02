module.exports = (req, res) => {
    res.render('addCommentParents', {title: 'Коментар в родители', user: req.session.user})
}