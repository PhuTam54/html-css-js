const newsRouter = require('./news');
const courseRouter = require('./course');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    app.use('/course', courseRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;