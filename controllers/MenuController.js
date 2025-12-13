import * as MenuModel from '../models/MenuModel.js';

export const fetchDishes = async (req, res ) =>{
    try{
        const dish = await MenuModel.getDishes();
        res.status(200).json(dish);
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }                                                                                                                                                                                                                                                                                                                                
}

export const newDish = async (req, res) => {
    const {item, category, price} = req.body
    try{
        const orderId = await MenuModel.newDish(item, category, price);
        res.status(200).json({success: true, message : orderId})
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const editDish = async (req, res) =>{
    const {item, category, price} = req.body
    const {dishId} = req.params

    try{                                                                                                                                                                    
        const updateId = await MenuModel.updateDish(item, category, price, dishId);
        res.status(200).json({success: true, message: updateId});
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const fetchDishesByCategory = async (req, res) => {
    try {
        const dishes = await MenuModel.getDishes();
        
        const grouped = {};
        dishes.forEach(dish => {
            if (!grouped[dish.category]) {
                grouped[dish.category] = [];
            }
            grouped[dish.category].push(dish);
        });
        res.status(200).json({
            success: true,
            data: grouped
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const fetchDishOrderCountByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const data = await MenuModel.getDishOrderCountByCategory(category);
        const totalOrders = data.reduce((sum, dish) => sum + dish.order_count, 0);

        res.status(200).json({
            success: true,
            category,
            total_orders: totalOrders,
            dishes: data
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};