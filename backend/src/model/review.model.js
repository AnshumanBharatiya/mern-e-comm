const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "products",
        required : true,
    },
    review : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
}, {timestamps : true});

const REVIEW = mongoose.model("reviews", reviewSchema);
module.exports = REVIEW;