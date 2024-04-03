const getParentComment = require('../requests/getParentsComment');

module.exports = async (req, res) => {
    const comment = await getParentComment();
    res.render('parents', { title: 'Parents page', user: req.session.user, comment: comment})
} 