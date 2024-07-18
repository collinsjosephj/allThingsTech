require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ 
    helpers: {
        formatDates: helpers.formatDates
    }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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
