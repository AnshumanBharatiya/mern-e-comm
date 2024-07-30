const CART = require("../model/cart.model");

const createCart = async (user) => {
  try {
    const cart = new CART({user});
    const createcart = await cart.save();
    return createcart;

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
    createCart
};