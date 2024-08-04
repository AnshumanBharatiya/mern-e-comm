const REVIEW = require("../model/review.model");
const productService = require("./product.service");

const createReview = async (reqData, user) => {
    const product = await productService.findProductById(reqData.productId);

    const review = new REVIEW({
        user : user._id,
        product : product._id,
        review : reqData.review,
    })

    await product.save();
    return await review.save();
}

const getAllReview = async (productId) => {
    return await REVIEW.find({product:productId}).populate("user");
}

module.exports = {
    createReview,
    getAllReview
}