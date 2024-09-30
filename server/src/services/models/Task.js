const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    ownerId: { type: String, required: true }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;