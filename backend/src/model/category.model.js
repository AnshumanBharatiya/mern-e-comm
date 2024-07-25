const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxlength : 50
    },
    parentCategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "categories",
    },
    lavel : {
        type : Number,
        required : true,
    },
});

const CATEGORY = mongoose.model("categories", categorySchema);
module.exports = CATEGORY;