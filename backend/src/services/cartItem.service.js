const CARTITEM = require('../model/cartItem.model');
const userService = require('../services/user.service');

const updateCartItem = async (userId, cartItemId, cartItemData) => {
    try {
        const item = await findCartItemById(cartItemId);

        if(!item){
            throw new Error("Cart Item Not Found : ", cartItemId)
        }
        const user = await userService.findUserById(item.userId);

        if(!user){
            throw new Error("User Not Found : ", item.userId)
        }

        if(user._id.toString() === userId.toString()){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updatedCartItem = await item.save();
            return updatedCartItem;
        }else{
            throw new Error("You can not update this cart item");
        }
        
    } catch (error) {
        throw new Error(error.message);
    }
}

const removeCartItem = async (userId, cartItemId) => {
    try {
        const cartItem = await findCartItemById(cartItemId);
        const user = await userService.findUserById(userId);

        if(user._id.toString() === cartItem.userId.toString()){
            return await CARTITEM.findByIdAndDelete(cartItemId)
        }else{
            throw new Error("You can not remove another user's item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

const findCartItemById = async (cartItemId) => {
    try {
        const cartItem = await CARTITEM.findById(cartItemId).populate("product");

        if(cartItem){
            return cartItem;
        }else{
            throw new Error("Cart Item not Found with id : ", cartItemId);
        }

    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}