import pool from "./db.js";

export const getOrdersByDate = async (date) => {
    const [rows] = await pool.query(
        `SELECT * FROM tblorders 
         WHERE DATE(created_at) = ? 
         ORDER BY created_at ASC`,
        [date]
    );
    return rows;
};