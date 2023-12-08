const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

const route = require('./routes');
const db = require('./config/db')

// Connect to DB
db.connect()

app.use(express.static('./src/public'));
app.use(express.urlencoded());
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
