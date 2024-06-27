const express = require('express');
const app = express();
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Homepage");
// })




// let posts =[
//     {
//         id:1,
//         title: 'post 1'
//     },
//     {
//         id:2,
//         title: "post 2"
//     }
// ];

// // app.get('/getpost',(req,res)=>{
// //     res.json(posts);
// // })

// app.get('/getpost',(req,res)=>{
//     if(req.query.id){
//         let post = posts.find((p) => p.id == req.query.id);
//         if(post) res.send(post);
//         else res.status(404).send("Post not found");
//     }
//     else res.json(posts);
// });


// //localhost:3000/getposts?id=1


// app.post('/addpost',(req,res)=>{
//     let post = req.body;
//     posts.push(post);
//     res.send(posts);
// });


// app.put('/update/:id',(req,res)=>{
//     let id = req.params.id;
//     let post = posts.find((p) => p.id ==id);
//     let title = req.body.title;
//     post.title = title;
//     res.send(post);
// });

// app.listen(3000,()=> console.log("server is running"));

