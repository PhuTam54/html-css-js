const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../until/mongoose') 

class MeController {

    // GET /me/stored/course
    storedCourse(req, res, next) {
        let courseQuery = Course.find({})

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', { 
                    deletedCount,
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
