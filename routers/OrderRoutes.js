import * as OrderController from '../controllers/OrderController.js';
import express from 'express';

const orderRoutes = express.Router();

orderRoutes.get('/all', OrderController.fetchOrders);
orderRoutes.post('/new', OrderController.createOrder);
orderRoutes.delete('/complete/:orderId', OrderController.completeOrder);

export default orderRoutes;