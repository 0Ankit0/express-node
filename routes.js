const express = require("express");
const router = express.Router();
const createPost = require("./functions")
const post = require("./db/posts");

//     router.get("/hi",(req,res)=>{//request and response as parameters
//         if(req.query.name != undefined){
//             res.send(" hi "+ req.query.name); 
//         }else{
//             res.send("Undefined name");
//         }
//     })
//     router.post("/bye",(req,res)=>{//request and respond as parameters
//         console.log(req.body.favColor); 
//     res.send(" bye bye");   
//    })

    // router.post("/",(req,res)=>{
    //     createPost(req.body.content,req.body.createdBy)
    //     .then((post)=>{
    //         res.send("created successfully")
    //     }).catch((error)=>{
    //         res.send("error")
    //     })

    // })
    router.get("/",(req,res)=>{
       post.find()
       .then((posts)=>{
            res.send(posts);
       }).catch((error)=>{
        res.send("error"+error)
       })
    })



 
   module.exports = router;