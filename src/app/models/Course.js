const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    // _id: { type: Number },
    name: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name' },
}, {
    // _id: false,
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

// CourseSchema.plugin(AutoIncrement, {inc_field: '_id'});
CourseSchema.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', CourseSchema);