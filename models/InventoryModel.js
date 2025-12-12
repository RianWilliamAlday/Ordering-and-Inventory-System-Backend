import pool from "./db.js";

export const getStocks = async () =>{
    const [rows] = await pool.query("SELECT * FROM tblinventory");
    return rows;
}

export const addStocks = async (category, stock) => {
    const [result] = await pool.query(
        "INSERT INTO tblinventory (category, stock) VALUES(?, ?)",
        [category, stock]
    );
    return result.insertId;                     
}

export const updateStocks = async (category, stock, stockId) => {
    const [result] = await pool.query(
        "UPDATE tblinventory SET category= ?, stock= ? WHERE id= ?",
        [category, stock, stockId]
    );
    return result.affectedRows;
}