import pool from "./db.js";

export const getOrders = async () => {
    const [rows] = await pool.query(
        `SELECT id, DATE_FORMAT(order_date, '%Y-%m-%d %r') AS order_date, ordered_items, table_number, quantity, total,payment_method FROM tblorders`
    );
    return rows;
}

export const insertOrders = async (order_date, ordered_items, table_number, quantity, total, payment_method) => {
    const [result] = await pool.query(
        "INSERT INTO tblorders (order_date, ordered_items, table_number, quantity, total, payment_method) VALUES(?, ?, ?, ?, ?, ?)",
        [order_date, ordered_items, table_number, quantity, total, payment_method]
    );
    return result.insertId;
}

export const completeOrder = async (orderId) => {
    await pool.query(
        `INSERT INTO tblorderhistory (id, order_date, ordered_items, table_number, quantity, total, payment_method)
         SELECT id, order_date, ordered_items, table_number, quantity, total, payment_method
         FROM tblorders
         WHERE id = ?`, [orderId]
    );

    const [result] = await pool.query(
        "DELETE FROM tblorders WHERE id= ?", [orderId]
    );
    return result.affectedRows;
}