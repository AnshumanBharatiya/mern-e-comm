const mongoose = require('mongoose');

const mongodbUrl = "";

const connectDb = () => {
    return mongoose.connect(mongodbUrl);
}

module.exports = connectDb;