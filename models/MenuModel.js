import pool from "./db.js";

export const getDishes = async () =>{
    const [rows] = await pool.query("SELECT * FROM tblmenu");
    return rows;
}

export const newDish = async (item, category, price) => {
    const [result] = await pool.query(
        "INSERT INTO tblmenu (item, category, price) VALUES(?, ?, ?)",
        [item, category, price]
    );
    return result.insertId;
}

export const updateDish = async (item, category, price, dishId) => {
    const [result] = await pool.query(
        "UPDATE tblmenu SET item= ?, category= ?, price= ? WHERE id= ?",
        [item, category, price, dishId]
    );
    return result.affectedRows;
}

export const getDishOrderCountByCategory = async (category) => {
    const [rows] = await pool.query(
        `SELECT m.item,
                COUNT(o.id) AS order_count
         FROM tblmenu m
         LEFT JOIN tblorderhistory o
             ON o.ordered_items LIKE CONCAT('%', m.item, '%')
         WHERE m.category = ?
         GROUP BY m.item`,
        [category]
    );

    return rows;
};