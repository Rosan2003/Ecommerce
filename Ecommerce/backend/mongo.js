const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');
const cors = require('cors');
app.use(cors());

//mongoose.connect("mongodb://127.0.0.1:27017/Stock")
mongoose.connect("mongodb+srv://rosanmgr1996:hirosanishere123@cluster0.k1iarvv.mongodb.net/Stock")

.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err.message);
})

// async function getProduct(){
//     // Product.find()
//     // .then((product) => console.log(product))
//     // .catch((err)=> console.log(err.message));

//     try{
//         let product = await Product.find();
//         console.log(product);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }


// function addProduct(){
//     let product ={
//         name: 'laptop',
//         price: 20,
//         isInStock: true
//     };
    
//     Product.create(product)
//     .then((p)=> console.log(p))
//     .catch((err)=> console.log(err.message));
// }

app.use("/api/products",productRouter);
app.use("/api/user",userRouter);
app.listen(3000,()=> console.log("server is running!"));

// addProduct();

// getProduct();

//token of lebron: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjRjM2QxNGZhMDVlODQyZGM5ZWY0YTkiLCJpYXQiOjE3MTYzNTYzOTR9.Ev0A_D7VmiNxqQ6W6Tk1yBRPju3G7KdjyW3qT7Djmc4
