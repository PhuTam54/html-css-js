const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../until/mongoose') 

class MeController {

    // GET /me/stored/course
    storedCourse(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', { 
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // GET /me/trashed/course
    trashedCourse(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/trashed-courses', { 
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
    
}

module.exports = new MeController();
