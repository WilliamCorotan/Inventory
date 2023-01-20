import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    purchaseID: {
        type: Number,
        required: true,
        trim: true
    }, 
    productID: {
        type: Number,
        required: true,
        trim: true
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    }, 
    customerID: {
        type: Number,
        required: true,
        trim: true
    },

    customerName: [{
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        firstName: {
            type: String,
            required: true,
            trim: true
        }, 
        middleInitial: {
            type: String,
            required: true,
            trim: true
        }
    }], 
    purchaseDate: {
        type: Date,
        default: Date.now
    }
})

const purchase = new mongoose.model('purchase', purchaseSchema)

export default purchase