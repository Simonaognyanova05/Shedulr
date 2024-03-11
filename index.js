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

app.get('/', homeController);
app.get('/categories', categoriesController);
app.get('/login', loginController);
app.get('/register', registerController);
app.get('/parents', parentsController);
app.get('/teen', teenController);
app.get('/women', womenController);

app.listen(3000);