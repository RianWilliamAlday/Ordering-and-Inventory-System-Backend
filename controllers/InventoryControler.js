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
    const {category, stock} = req.body
    try{
        const stockId = await InventoryModel.addStocks(category, stock);
        res.status(200).json({success: true, message : stockId})
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const editStocks = async (req, res) =>{
    const {category, stock} = req.body
    const {stockId} = req.params

    try{                                                                                                                                                                    
        const updateId = await InventoryModel.updateStocks(category, stock, stockId);
        res.status(200).json({success: true, message: updateId});
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}