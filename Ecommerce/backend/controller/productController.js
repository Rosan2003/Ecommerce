const Product = require('../models/product.js');

async function getProduct(req,res){
    // Product.find()
    // .then((product) => console.log(product))
    // .catch((err)=> console.log(err.message));

    try{
        //find by name
        // if(req.query.name){
        //     let product = await Product.find({name: req.query.name})
        //     return res.send(product)
        // }

        // let product = await Product.find().populate("addedBy");
        // res.json(product);

        let productId = req.query.productId;
        if(productId){
            let product = await Product.findById(productId);
            return res.send(product);
        }

        let product = await Product.find().populate("addedBy","fullname-_id");
        res.send(product);
    }
    catch(err){
        res.status(500).send({error: err.message});
    }
}

async function addProduct(req,res){
    let newproduct = req.body;
    let product = await Product.create({...newproduct, addedBy: req.user});
    let response = {
        message: "Products added"
    };
    res.json(response);
}

async function updateProduct(req,res){
    let id = req.params.id;
    let updateField = req.body;
    let product = await Product.findByIdAndUpdate(id, {$set: updateField});
    res.send({message: "product updated"});
}

async function deleteProduct(req,res){
    let id = req.params.id;
    let product = await Product.findByIdAndDelete(id);
    res.send({message: "Product deleted"});
}

// addProduct();

exports.getProduct = getProduct;
exports.addProduct = addProduct; 
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;