const mongoose = require('mongoose');

const mongodbUrl = "mongodb+srv://bharatiyaa3:YDSTUzxKOQqcfGRv@cluster0.iz7gphd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
    return mongoose.connect(mongodbUrl);
}

module.exports = connectDb;