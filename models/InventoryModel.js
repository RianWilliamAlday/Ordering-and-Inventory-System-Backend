import pool from "./db.js";

export const getStocks = async () =>{
    const [rows] = await pool.query("SELECT * FROM tblinventory");
    return rows;
}

export const addStocks = async (category, stocks) => {
    const [result] = await pool.query(
        "INSERT INTO tblinventory (category, stocks) VALUES(?, ?)",
        [category, stocks]
    );
    return result.insertId;                     
}

export const updateStocks = async (category, stocks, stockId) => {
    const [result] = await pool.query(
        "UPDATE tblinventory SET category= ?, stocks= ? WHERE id= ?",
        [category, stocks, stockId]
    );
    return result.affectedRows;
}