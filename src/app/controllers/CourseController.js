const Course = require('../models/Course')
const { mongooseToObject } = require('../../until/mongoose') 

class CourseController {

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course/show', { 
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    // [GET] /course/create
    create(req, res) {
        res.render('course/create')
    }

    // [POST] /course/store
    store(req, res, next) {
        const formData = {...req.body}
        formData.thumbnail = `https://img.youtube.com/vi/${ req.body.videoId }/sddefault.jpg`
        const course = new Course(formData)
        course
            .save()
            .then(() => res.redirect('/me/stored/course'))
            .catch(next)
        
    }

    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('course/edit', { 
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/course'))
            .catch(next)
    }

    // [DELETE] /course/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/course'))
            .catch(next)
        
    }

    // [DELETE] /course/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/course'))
            .catch(next)
        
    }

    // [PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trashed/course'))
            .catch(next)
    }

    // [POST] /course/handle-action-form
    handleActionForm(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('/me/stored/course'))
                    .catch(next)
                break;
        
            default:
                res.json({ message: 'Action is invalid'});
        }
    }
    
}

module.exports = new CourseController();
