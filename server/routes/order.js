const express = require('express');
const router = express.Router();
const {createOrder, getOrders, deleteOrder} = require('../controllers/order');

router.post('/add', createOrder);
router.get('/all-orders', getOrders);
router.delete('/:id', deleteOrder);

module.exports = router;