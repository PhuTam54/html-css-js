const express = require('express');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');

const SortMiddleware = require('./app/middlewares/sortMiddleware.x');

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
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'fa fa-sort',
                    asc: 'fas fa-sort-amount-down-alt',
                    desc: 'fas fa-sort-amount-down',
                }
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }

                const icon = icons[sortType]
                const type = types[sortType]

                return `<a href="/me/stored/course?_sort&column=${field}&type=${type}">
                    <i class="${icon}"></i>
                </a>`
            }
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
