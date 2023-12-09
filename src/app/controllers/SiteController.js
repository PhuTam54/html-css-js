const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../until/mongoose') 

class SiteController {
    // GET /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // GET /search
    search(req, res) {
        res.send('SEARCH');
    }
}

module.exports = new SiteController();
