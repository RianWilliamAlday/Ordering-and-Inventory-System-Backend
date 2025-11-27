import * as OrderModel from '../models/OrderModel.js';

export const fetchOrders = async (req, res ) =>{
    try{
        const orders = await OrderModel.getOrders();
        res.status(200).json(orders);
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }                                                                                                                                                                                                                                                                                                                                
}

export const createOrder = async (req, res) => {
    const {order_date, ordered_items, table_number, quantity, total, payment_method} = req.body
    try{
        const orderId = await OrderModel.insertOrders(order_date, ordered_items, table_number, quantity, total, payment_method);
        res.status(200).json({success: true, message : orderId})
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const completeOrder = async (req, res) => {
    const {orderId} = req.params;
    console.log(orderId);
    try{
        const deleteId = await OrderModel.completeOrder(orderId);
        res.status(200).json({success: true, message: deleteId});
    }catch(e){
        console.log(e);
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}