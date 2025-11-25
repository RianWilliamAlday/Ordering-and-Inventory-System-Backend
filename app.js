import express from "express";
import 'dotenv/config.js';
                                                                                   

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





