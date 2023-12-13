const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name' },
}, {
    timestamps: true
});

// Custom query helpers
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type)

        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        })
    }
    return this
}

// Add Plugin
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', CourseSchema);