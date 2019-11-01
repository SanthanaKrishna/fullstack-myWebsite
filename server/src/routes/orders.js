const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');

import OrdersController from '../controllers/orders';

router.get('/', checkAuth, OrdersController.order_get_all);


router.post('/', checkAuth, OrdersController.orders_create_order);

router.get('/:orderId', checkAuth, OrdersController.orders_get_order);


router.delete(':/ordertId', checkAuth, OrdersController.orders_delete_order);

module.exports = router;