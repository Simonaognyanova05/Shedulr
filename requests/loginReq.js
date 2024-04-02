const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const dbUrl = 'mongodb://localhost:27017/teenForum_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function loginReq(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if(user){
        const unHashedPass = await bcrypt.compare(password, user.hashedPassword);

        if(unHashedPass){
            req.session.user = user;
            res.redirect('/');
        }else{
            res.send(`<script>
        alert('Невалидни данни!');
        window.location.href = '/login';
        </script>`);
        return;
        }
    }
}

module.exports = loginReq;