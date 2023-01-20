import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';

import productRouter from "./routes/product.js";
import customerRouter from "./routes/customer.js";
import supplierRouter from "./routes/supplier.js";
import purchaseRouter from "./routes/purchase.js";

const app = express();
const PORT = process.env.PORT || 5000;


//middlewares
app.use(cors());
app.use(express.json());

//mongoDB connection 
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongDB database connection established successfully");
});

app.use('/product',productRouter)
app.use('/customer',customerRouter)
app.use('/supplier',supplierRouter)
app.use('/purchase',purchaseRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


