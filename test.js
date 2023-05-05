   //run npm init to initialize package.json
   //node filename to run file locally
   //npm install express to download express
   //download thunder client extension
   //npm install mongoose
   //npm install --save-dev nodemon to download the extension while building and don't run while deploying nodemonitor
   
   const express = require("express"); //importing express
   const httpServer = express();
   

   httpServer.get("/",(req,res)=>{//request and respond as parameters
    console.log("new request found");
    res.send("Hello there")
   })
   httpServer.listen(3000,()=>{
    console.log("listening to port 3000");
   })