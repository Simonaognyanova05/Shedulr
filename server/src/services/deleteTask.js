const mongoose = require('mongoose');
const Task = require('./models/Task');

const dbUrl = 'mongodb+srv://simonaognanova05:pWWaQT8I6GJ3C3aw@admin.h0bem.mongodb.net/todo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function deleteTask(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const taskId = req.params.taskId;
    try {
        await Task.findByIdAndDelete(taskId);

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { deleteTask };