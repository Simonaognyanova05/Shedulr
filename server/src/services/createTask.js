const mongoose = require('mongoose');
const Task = require('./models/Task');

const dbUrl = 'mongodb+srv://simonaognanova05:pWWaQT8I6GJ3C3aw@admin.h0bem.mongodb.net/todo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function createTask(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, description, ownerId } = req.body;
    try {
        const task = new Task({
            title, description, ownerId
        });

        await task.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { createTask };