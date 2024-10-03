const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const dbUrl = 'mongodb+srv://simonaognanova05:pWWaQT8I6GJ3C3aw@admin.h0bem.mongodb.net/todo_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function register(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { name, username, password } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            username,
            hashedPass
        });

        await user.save();
        return res.status(200).json({ _id: user._id, name: user.name, username: user.username,  })

    } catch (e) {
        throw e;
    }
}

module.exports = { register };