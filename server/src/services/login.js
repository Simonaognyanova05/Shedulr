const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://simonaognanova05:pWWaQT8I6GJ3C3aw@admin.h0bem.mongodb.net/todo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function login(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json();
        };

        const comparedPass = await bcrypt.compare(password, user.hashedPass);

        if (!comparedPass) {
            return res.status(401).json();
        };

        return res.status(200).json({ _id: user._id, username: user.username })
    } catch (e) {
        throw e;
    }
};

module.exports = { login };