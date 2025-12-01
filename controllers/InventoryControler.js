import * as InventoryModel from '../models/InventoryModel.js';

export const fetchStocks = async (req, res ) =>{
    try{
        const stocks = await InventoryModel.getStocks();
        res.status(200).json(stocks);
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }                                                                                                                                                                                                                                                                                                                                
}

export const addStocks = async (req, res) => {
    const {item, quantity} = req.body
    try{
        const stockId = await InventoryModel.addStocks(item, quantity);
        res.status(200).json({success: true, message : stockId})
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}