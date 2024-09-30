const express = require('express');
const cors = require('cors');
const { register } = require('./services/register');
const { login } = require('./services/login');
const { createTask } = require('./services/createTask');
const { getTasks } = require('./services/getTasks');
const { deleteTask } = require('./services/deleteTask');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    await register(req, res);
});

app.post('/login', async (req, res) => {
    await login(req, res);
});

app.post('/create', async (req, res) => {
    await createTask(req, res);
});

app.get('/tasks', async (req, res) => {
    const tasks = await getTasks(req, res);
    return res.json(tasks);
});

app.delete('/remove/:taskId', async (req, res) => {
    await deleteTask(req, res);
})
app.listen(2000);