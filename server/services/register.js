const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User')

const dbUrl = 'mongodb+srv://simonaognanova05:cQYdEGbyjmHthNeU@react-task.hujfarb.mongodb.net/todo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function register(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            hashedPass
        })

        await user.save();
    } catch (e) {
        throw e;
    }
}

module.exports = { register };