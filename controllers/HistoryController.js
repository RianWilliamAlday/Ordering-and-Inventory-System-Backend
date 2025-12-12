import * as HistoryModel from '../models/HistoryModel.js';

export const fetchOrderHistory = async (req, res ) =>{
    try{
        const orders = await HistoryModel.getHistory();
        res.status(200).json(orders);
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }                                                                                                                                                                                                                                                                                                                                
}