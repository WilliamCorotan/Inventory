import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productID: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productSummary: {
        type: String,
        required: true,
        trim: true
    },
    totalQuantity: {
        type: Number,
        required: true,
        trim: true
    }

},{
    timestamps: true
});

const product = mongoose.model('product', productSchema);


export default product;