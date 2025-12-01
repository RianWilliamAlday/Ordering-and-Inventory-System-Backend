import pool from "./db.js";

export const getStocks = async () =>{
    const [rows] = await pool.query("SELECT * FROM tblstocks");
    return rows; 
}

export const addStocks = async (item, quantity) => {
    const [result] = await pool.query(
        "INSERT INTO tblstocks (item, quantity) VALUES(?, ?, ?)",
        [item, quantity]
    );
    return result.insertId;                     
}