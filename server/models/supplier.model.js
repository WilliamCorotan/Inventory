import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    supplierID: {
        type: Number,
        required: true,
        trim: true
    },
    supplierName: 
        {
            type: String,
            required: true,
            trim: true
        }
,
    supplierAddress: {
        type: String,
        required: true,
        trim: true
    },

    supplierContactNumber: {
        type: String,
        required: true,
        trim: true
    },
    supplierEmail: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps:true}); 

const supplier = mongoose.model('supplier', supplierSchema)

export default supplier;