import express from "express";
import 'dotenv/config.js';
import orderRoutes from "./routers/OrderRoutes.js";
import userRoutes from "./routers/UserRoutes.js";
import cors from "cors";
                                                                                   

const app = express();

//*miiddleware
app.use(express.json());

try {
    app.listen(process.env.PORT || 3000, () => {     
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
} catch (e) {
    console.log(e);
}

app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

export default orderRoutes;