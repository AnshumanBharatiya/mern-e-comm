const RATING = require("../model/rating.model");
const productService = require("./product.service");

const createRating = async (reqData, user) => {
    const product = await productService.findProductById(reqData.productId);

    const rating = new RATING({
        user : user._id,
        product : product._id,
        rating : reqData.rating,
    })
    return await rating.save();
}

const getProductRating = async (productId) => {
    return await RATING.find({product:productId})
}

module.exports = {
    createRating,
    getProductRating
}