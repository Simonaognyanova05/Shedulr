const mongoose = require('mongoose');

const parentsSchema = new mongoose.Schema({
    theme: {type: String, required: true},
    comment: {type: String, required: true},
    username: {type: String, required: true}
})

const Parents = mongoose.model('Parents', parentsSchema);

module.exports = Parents;