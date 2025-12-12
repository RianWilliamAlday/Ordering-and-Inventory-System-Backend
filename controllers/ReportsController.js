import * as ReportsModel from '../models/ReportsModel.js';

export const getOrdersByDate = async (req, res) => {
    const {date} = req.params;
    try {
        const orders = await ReportsModel.getOrdersByDate(date);
        res.status(200).json({ success: true, date: date, totalOrders: orders.length, orders});
    }catch(e){
        console.log(e);
        res.status(500).json({ 
            success: false, 
            message: "Internal Server Error" 
        })
    }
};

export const getDailySummary = async (req, res) => {
    const { date } = req.params;
    try {
        const totalOrders = await ReportsModel.getTotalOrdersForDate(date);
        const totalRevenue = await ReportsModel.getTotalRevenueForDate(date);
        res.status(200).json({ success: true, date, totalOrders, totalRevenue
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

