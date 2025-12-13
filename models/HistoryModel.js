import pool from "./db.js";

export const getHistory = async () => {
    const [rows] = await pool.query(
        `SELECT id, DATE_FORMAT(order_date, '%Y-%m-%d %r') AS order_date, ordered_items, table_number, quantity, total,payment_method FROM tblorderhistory`
    );
    return rows;
}