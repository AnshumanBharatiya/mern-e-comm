const cartService = require('../services/cart.service');
const ADDRESS = require('../model/address.model');
const ORDER = require('../model/order.model');
const ORDERITEM = require('../model/orderItems.model');


const  createOrder = async (user, shippAddress) => {
    let address;
    
    if(shippAddress._id){
        address = await ADDRESS.findById(shippAddress._id).lean();
        // address = existAddress;
    }else{
        address = new ADDRESS(shippAddress);
        address.user = user._id;
        await address.save();

        user.address.push(address._id);
        await user.save();
    }
    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];
    
    for(let item of cart.cartItem){
        const orderItem = new ORDERITEM({
            price : item.price,
            product : item.product,
            quantity : item.quantity,
            size : item.size,
            userId : item.userId,
            discountedPrice : item.discountedPrice,
        })
        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem)
    }

    const createdOrder = new ORDER({
        user: user,
        orderItems : orderItems,
        totalPrice : cart.totalPrice,
        totalDiscountedPrice : cart.totalDiscountPrice,
        discounte : cart.discount,
        totalItem : cart.totalItem,
        shippingAddress: address,
    })

    const savedOrder = await createdOrder.save();
    return savedOrder;
}

const placeOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "PLACED".populate({path:"orderIte"})
    order.paymentDetails = "COMPLETED";
    return await order.save();
}

const confirmedOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";
    return await order.save();
}

const shipOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "SHIPPED";
    return await order.save();
}

const deliverOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
}

const cancelledOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED";
    return await order.save();
}

const findOrderById = async (orderId) => {
    try {
        const order = await ORDER.findById(orderId)
        .populate("user")
        .populate({path:"orderItems", populate:{path:"product"}})
        .populate("shippingAddress");

        return order;

    } catch (error) {
        throw new Error(error.message);
    }
}

const usersOrderHistory = async (userId) => {
    try {
        const orders = await ORDER.find({user:userId, orderStatus:"PLACED"}).populate({path:"orderItems", populate:{path:"product"}}).lean();

        return orders;
        
    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllOrders = async () => {
    try {
        const orders = await ORDER.find();
        return orders;
    } catch (error) {
        throw new Error(error.message);
    }
}

const deleteOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    await ORDER.findByIdAndDelete(order._id)
}

module.exports = {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    cancelledOrder,
    findOrderById,
    usersOrderHistory,
    getAllOrders,
    deleteOrder
}