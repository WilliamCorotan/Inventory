import  express  from "express";
import customer from "../models/customer.model.js";

const customerRouter = express.Router();

//home
customerRouter.route('/').get((req,res)=>{
    customer.find()
    .then((customer) => {res.json(customer)})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});
//add
customerRouter.route('/add').post((req, res)=>{
    const customerID = req.body.customerID;
    const customerName = req.body.customerName;
    const customerAddress = req.body.customerAddress;
    const customerContactNumber = req.body.customerContactNumber;
    const customerEmail = req.body.customerEmail;

    const newCustomer = new customer({customerID, customerName, customerAddress, customerContactNumber, customerEmail})
    newCustomer.save()
    .then(() => {res.json('Successfully added new customer!')})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//details 
customerRouter.route('/:id').get((req,res)=>{
    customer.findById(req.params.id)
    .then((customer) => {res.json(customer)})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//delete
customerRouter.route('/delete/:id').delete((req,res)=>{
    customer.findByIdAndDelete(req.params.id)
    .then(() => {res.json('Successfully deleted record!')})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//update 
customerRouter.route('/update/:id').post((req, res)=>{
    customer.findById((req.params.id))
    .then(customer => {
        customer.customerID = req.body.customerID;
        customer.customerName = req.body.customerName;
        customer.customerAddress = req.body.customerAddress;
        customer.customerContactNumber = req.body.customerContactNumber;
        customer.customerEmail = req.body.customerEmail;

        customer.save()
        .then(() => res.json('Record was Updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default customerRouter;
