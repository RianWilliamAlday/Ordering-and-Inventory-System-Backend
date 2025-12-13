import pool from "./db.js";

export const getOrdersByDate = async (date) => {
    const [rows] = await pool.query(
        `SELECT * FROM tblorderhistory 
         WHERE DATE(order_date) = ? 
         ORDER BY order_date ASC`,
        [date]
    );
    return rows;
};

export const getTotalOrdersForDate = async (date) => {
    const [rows] = await pool.query(
        `SELECT COUNT(*) AS totalOrders
         FROM tblorderhistory
         WHERE DATE(order_date) = ?`,
        [date]
    );
    return rows[0].totalOrders;
};

export const getTotalRevenueForDate = async (date) => {
    const [rows] = await pool.query(
        `SELECT SUM(total) AS totalRevenue
         FROM tblorderhistory
         WHERE DATE(order_date) = ?`,
        [date]
    );
    return rows[0].totalRevenue || 0;
};

