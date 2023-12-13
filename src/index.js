const express = require('express');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect()

const app = express();
const port = 3000;

// Use static folder
app.use(express.static('./src/public'));

app.use(express.urlencoded());
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Custom Middlewares
app.use(SortMiddleware);

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
