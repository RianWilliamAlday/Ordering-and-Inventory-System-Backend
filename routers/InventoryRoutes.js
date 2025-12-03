import * as InventoryController from '../controllers/InventoryControler.js';
import express from 'express';

const inventoryRoutes = express.Router();

inventoryRoutes.get('/all', InventoryController.fetchStocks);
inventoryRoutes.post('/new', InventoryController.addStocks);

export default inventoryRoutes;