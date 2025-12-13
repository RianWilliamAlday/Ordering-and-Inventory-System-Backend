import express from "express";
import 'dotenv/config.js';
import orderRoutes from "./routers/OrderRoutes.js";
import userRoutes from "./routers/UserRoutes.js";
import inventoryRoutes from "./routers/InventoryRoutes.js";
import reportRoutes from "./routers/ReportRoutes.js";
import menuRoutes from "./routers/MenuRoutes.js";
import historyRoutes from "./routers/HistoryRoutes.js";
import cors from "cors";
                                                                                   

const app = express();

let corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true
};

app.use(express.json());
app.use(cors(corsOptions));

try {
    app.listen(process.env.PORT || 3000, () => {     
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
} catch (e) {
    console.log(e);
}

app.use('/orders', orderRoutes);
app.use('/inventory', inventoryRoutes)
app.use('/user', userRoutes);
app.use('/reports', reportRoutes)
app.use('/menu', menuRoutes)
app.use('/history', historyRoutes)

export default orderRoutes;