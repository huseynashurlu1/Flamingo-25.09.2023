const Order = require('../models/order');

// Create Order 
const createOrder = async (req, res) => {
    const order = await Order.create(req.body)
    res.json(order)
}

// Get All Orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        throw new Error(error)
    }
}

// Delete Order
const deleteOrder = async (req, res) => {
    const { id } = req.params
    try {
        const order = await Order.findByIdAndDelete(id);
        res.json(order);
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {createOrder, getOrders, deleteOrder};
