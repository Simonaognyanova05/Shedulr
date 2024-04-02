const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const homeController = require('./src/home');
const categoriesController = require('./src/categories');
const loginController = require('./src/login');
const registerController = require('./src/register');
const parentsController = require('./src/parents');
const teenController = require('./src/teen');
const womenController = require('./src/women');
const housewifeController = require('./src/housewife');
const petsController = require('./src/pets');
const otherController = require('./src/other');
const registerReq = require('./requests/registerReq');
const loginReq = require('./requests/loginReq');
const parentsComment = require('./src/parentsComment');

const app = express();

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({    
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//Controlles 
app.get('/', homeController);
app.get('/categories', categoriesController);
app.get('/login', loginController);
app.get('/register', registerController);
app.get('/parents', parentsController);
app.get('/teen', teenController);
app.get('/women', womenController);
app.get('/housewife', housewifeController);
app.get('/pets', petsController);
app.get('/other', otherController);
app.get('/addCommentParents', parentsComment);

app.post('/register', async(req, res) => {
    await registerReq(req, res);
})
app.post('/login', async(req, res) => {
    await loginReq(req, res);
})

app.listen(3000);