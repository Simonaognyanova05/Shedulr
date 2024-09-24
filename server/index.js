const express = require('express');
const cors = require('cors');

const { register } = require('./services/register');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    await register(req, res);
})

app.listen(2000);