import express  from "express";
import purchase from "../models/purchase.model.js";

const purchaseRouter = express.Router();

//home
purchaseRouter.route('/').get((req,res)=>{
    purchase.find()
    .then((purchase) => {res.json(purchase)})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//add
purchaseRouter.route('/add').post((req, res)=>{
    const purchaseID = req.body.purchaseID;
    const productID = req.body.productID;
    const productName = req.body.productName;
    const quantity = req.body.quantity;
    const customerID = req.body.customerID;
    const customerName = req.body.customerName;
    const purchaseDate = req.body.purchaseDate;


    const newPurchase = new purchase({purchaseID, productID, productName, quantity, customerID, customerName, purchaseDate})
    newPurchase.save()
    .then(() => {res.json('Successfully added new customer!')})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//details 
purchaseRouter.route('/:id').get((req,res)=>{
    purchase.findById(req.params.id)
    .then((purchase) => {res.json(purchase)})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

//delete
purchaseRouter.route('/delete/:id').delete((req,res)=>{
    purchase.findByIdAndDelete(req.params.id)
    .then(() => {res.json('Successfully deleted record!')})
    .catch((err) => {res.status(400).json('Error: ' + err)})
});

purchaseRouter.route('update/:id').post((req, res)=>{
    purchase.findById(req.params.id)
    .then((purchase)=>{
        const purchaseID = req.body.purchaseID;
        const productID = req.body.productID;
        const productName = req.body.productName;
        const quantity = req.body.quantity;
        const customerID = req.body.customerID;
        const customerName = req.body.customerName;
        const purchaseDate = req.body.purchaseDate;


        purchase.save()
        .then(() => {res.json('Successfully updated record!')})
        .catch((err) => {res.status(400).json('Error: ' + err)})
    })
    .catch((err) => {res.status(400).json('Error: ' + err)})

});

export default purchaseRouter;
