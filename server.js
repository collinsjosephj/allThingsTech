require('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

const startServer = async () => {
    try {
        await sequelize.sync({ force: false });
        app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); 
    }
};

startServer();
