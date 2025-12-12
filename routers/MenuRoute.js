import * as MenuController from '../controllers/MenuController.js';
import express from 'express';

const menuRoutes = express.Router();

menuRoutes.get('/all', MenuController.fetchDishes);
menuRoutes.get('/category', MenuController.fetchDishesByCategory);
menuRoutes.post('/new', MenuController.newDish);
menuRoutes.put('/edit/:dishId', MenuController.editDish);
menuRoutes.get("/orders/count/:category", MenuController.fetchDishOrderCountByCategory);


export default menuRoutes; 