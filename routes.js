const express = require("express");
const router = express.Router();

    router.get("/",(req,res)=>{//request and respond as parameters
    console.log("new request found");
    res.send("Hello there, hi");
    
   })
   router.post("/",(req,res)=>{//request and respond as parameters
    console.log("new post request found");
    res.send("Hello there from post");
    
   })

   module.exports = router;