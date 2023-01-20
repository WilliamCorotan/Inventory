import  express  from 'express';
import product from '../models/product.model.js';
const productRouter = express.Router();

//home
productRouter.route('/').get(async (req, res)=> {
    product.find() //select * from table
    .then((product) => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

//add
productRouter.route('/add').post(async (req, res)=>{
    const productID = req.body.productID;
    const productName = req.body.productName;
    const productSummary = req.body.productSummary;
    const totalQuantity = req.body.totalQuantity;

    const newProduct = new product({productID, productName, productSummary, totalQuantity});

    await newProduct.save()
    .then(product => res.json('New Product Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});


//details === select *
productRouter.route('/:id').get( (req, res) => {
    product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
})

//delete
productRouter.route('/delete/:id').delete((req, res) => {
     product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Record successfully deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

//update
productRouter.route('/update/:id').put( async (req, res)=>{
    await product.findById((req.params.id))
    .then( product => {
        product.productID = req.body.productID;
        product.productName = req.body.productName;
        product.productSummary = req.body.productSummary;
        product.totalQuantity = req.body.totalQuantity;

         product.save()
        .then(() => res.json('Record was Updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default productRouter;
