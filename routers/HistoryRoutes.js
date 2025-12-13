import * as HistoryController from '../controllers/HistoryController.js';
import express from 'express';

const historyRoutes = express.Router();

historyRoutes.get('/all', HistoryController.fetchOrderHistory);

export default historyRoutes;