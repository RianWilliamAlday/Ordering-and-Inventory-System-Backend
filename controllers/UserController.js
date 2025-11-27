import * as UserModel from "../models/UserModel.js";

export const login = async (req, res) => {
    const { role, password } = req.body;

    try {
        const user = await UserModel.login(role, password);
        res.status(200).json({ success: true, message: user });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
    }
};
