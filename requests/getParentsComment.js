const mongoose = require('mongoose');
const Parents = require('../models/Parents');

const dbUrl = 'mongodb://localhost:27017/teenForum_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getParentsComment(){
    await mongoose.connect(dbUrl, connectionParams);

    const parentsComment = (await Parents.find({})).map(x => x.toJSON());

    return parentsComment;
}

module.exports = getParentsComment;