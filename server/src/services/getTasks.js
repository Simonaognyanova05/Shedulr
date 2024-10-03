const mongoose = require('mongoose');
const Task = require('./models/Task');

const dbUrl = 'mongodb+srv://simonaognanova05:pWWaQT8I6GJ3C3aw@admin.h0bem.mongodb.net/todo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getTasks(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { ownerId } = req.body;

    try {
        const tasks = await Task.find({ ownerId });

        return tasks;
    } catch (e) {
        throw e;
    }
};

module.exports = { getTasks };