import express  from "express";
import supplier from "../models/supplier.model.js";

const supplierRouter = express.Router();

//home
supplierRouter.route('/').get((req, res)=> {
    supplier.find() //select * from table
    .then((supplier) => res.json(supplier))
    .catch(err => res.status(400).json('Error: ' + err));
});

//add
supplierRouter.route('/add').post((req, res)=> {
    const supplierID = req.body.supplierID;
    const supplierName = req.body.supplierName;
    const supplierAddress = req.body.supplierAddress;
    const supplierContactNumber = req.body.supplierContactNumber;
    const supplierEmail = req.body.supplierEmail;

    const newSupplier = new supplier({supplierID, supplierName, supplierAddress, supplierContactNumber, supplierEmail})
    newSupplier.save()
    .then(() => {res.json('Successfully added new supplier!')})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//details supplier
supplierRouter.route('/:id').get((req,res)=>{
    supplier.findById(req.params.id)
    .then((supplier) => {res.json(supplier)})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});


//delete
supplierRouter.route('/delete/:id').delete((req,res)=>{
    supplier.findByIdAndDelete(req.params.id)
    .then(() => {res.json('Successfully deleted record!')})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//update 
supplierRouter.route('/update/:id').post((req, res)=>{
    supplier.findById(req.params.id)
    .then(supplier=>{
        supplier.supplierID = req.body.supplierID;
        supplier.supplierName = req.body.supplierName;
        supplier.supplierAddress = req.body.supplierAddress;
        supplier.supplierContactNumber = req.body.supplierContactNumber;
        supplier.supplierEmail = req.body.supplierEmail;

        supplier.save()
        .then(() => res.json('Successfully updated record!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

export default supplierRouter;