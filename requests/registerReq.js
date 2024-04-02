const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const dbUrl = 'mongodb://localhost:27017/teenForum_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function registerReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, email, password, repass } = req.body;

    if (username.length < 6) {
        res.send(`<script>
        alert('Потребителското име трябва да е минимум 6 символа!');
        window.location.href = '/register';
        </script>`);
        return;
    };

    if(password != repass){
        res.send(`<script>
        alert('Паролите не съвпадат!');
        window.location.href = '/register';
        </script>`);
        return;
    }

    if(password.length < 6){
        res.send(`<script>
        alert('Паролата трябва да е минимум 6 символа!');
        window.location.href = '/register';
        </script>`);
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username, email, hashedPassword,
    })
    await user.save();
    res.redirect('/');
}
module.exports = registerReq;