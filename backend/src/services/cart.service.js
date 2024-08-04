const CART = require("../model/cart.model");
const CARTITEM = require("../model/cartItem.model");
const PRODUCT = require("../model/product.model");

const createCart = async (user) => {
  try {
    const cart = new CART({user});
    const createcart = await cart.save();
    return createcart;

  } catch (error) {
    throw new Error(error.message);
  }
};


const findUserCart = async (userId) => {
  try {
    let cart = await CART.findOne({user:userId});

    let cartItems = await CARTITEM.find({cart:cart._id}).populate("product");

    cart.cartItem = cartItems;
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for(let cartItem of cart.cartItem){
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.discount = totalPrice - totalDiscountedPrice;
    // cart.totalDiscountPrice = totalDiscountedPrice;

    return cart;

  } catch (error) {
    throw new Error(error.message)
  }
}


const addCartItem = async (userId, req) => {
  try {
    const cart = await CART.findOne({user:userId});
    const product = await PRODUCT.findById(req.productId);

    const isPresent = await CARTITEM.findOne({cart:cart._id, product:product._id, userId});

    if(!isPresent){
      const cartItem =  new CARTITEM({
        product:product._id,
        cart:cart._id,
        quantity:1,
        userId,
        price:product.price,
        size:req.size,
        discountedPrice:product.discountedPrice
      })

      const createdCartItem = await cartItem.save();
      cart.cartItem.push(createdCartItem);
      await cart.save();

      return "Item Added to the Cart";

    }

  } catch (error) {
    throw new Error(error.message)
  }
}


module.exports = {
    createCart,
    findUserCart,
    addCartItem
};