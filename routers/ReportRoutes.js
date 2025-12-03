import * as ReportsController from '../controllers/ReportsController.js';
import express from 'express';

const reportRoutes = express.Router();

reportRoutes.get('/by-date/:date', ReportsController.getOrdersByDate);

export default reportRoutes;