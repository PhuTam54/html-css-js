module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(course => course.toObject())
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}