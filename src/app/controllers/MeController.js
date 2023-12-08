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

}

module.exports = new MeController();
