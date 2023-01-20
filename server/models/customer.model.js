import mongoose from "mongoose";

 

const customerSchema = new mongoose.Schema({
    customerID: {
        type: Number,
        required: true,
        trim: true
    },

    customerName: {
            type: String,
            required: true,
            trim: true
    }, 

    customerAddress: {
        type: String,
        required: true,
        trim: true
    },

    customerContactNumber: {
        type: String,
        required: true,
        trim: true
    },
    customerEmail: {
        type: String,
        required: true,
        trim: true
    }

},{timestamps: true})

const customer = mongoose.model('costumer', customerSchema)

export default customer;