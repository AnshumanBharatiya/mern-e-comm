const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "products",
        required : true,
    },
    size : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    discountedPrice : {
        type : Number,
        required : true,
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true,
    },
});

const ORDERITEM = mongoose.model("orderItems", orderItemSchema);
module.exports = ORDERITEM;