const mongoose = require('mongoose');
const Parents = require('../models/Parents');

const dbUrl = 'mongodb://localhost:27017/teenForum_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function addParentsComment(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    const { theme, comment } = req.body;
    const username = req.session.user.username;

    const parentsComment = new Parents({
        theme, comment, username,
    });
    await parentsComment.save();
    res.redirect('/parents');
}

module.exports = addParentsComment;