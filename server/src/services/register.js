const mongoose = require('mongoose');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://simonaognanova05:pWWaQT8I6GJ3C3aw@admin.h0bem.mongodb.net/todo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function register(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const user = new User({
            username,
            hashedPass: password
        });

        await user.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
}

module.exports = { register };