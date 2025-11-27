import pool from '../models/db.js';
import bcrypt from "bcryptjs";

export const getUserByRole = async (role) => {
    const [user] = await pool.query(
        "SELECT * FROM tbluser WHERE role = ?",
        [role]
    );
    return user[0]; 
};

export const login = async (role, password) => {
    if (!role || !password) {
        throw new Error("Role and password required");
    }

    const user = await getUserByRole(role);

    if (!user) {
        throw new Error(`User with role '${role}' does not exist`);
    }

    const validPass = bcrypt.compareSync(password, user.password);

    if (!validPass) {
        throw new Error("Incorrect password");
    }

    return { message: "Login successful", role: user.role };
};
