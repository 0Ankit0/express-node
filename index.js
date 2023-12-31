   //run npm init to initialize package.json
   //node filename to run file locally
   //npm install express to download express
   //download thunder client extension
   //npm install mongoose
   //npm install --save-dev nodemon to download the extension while building and don't run while deploying nodemonitor
   //npm install -g nodemon to install it globally
   //nodemon checks for any change in js file like live server and restarts the server
   
   const express = require("express"); //importing express
   const routes = require("./routes");
   const router = require("./routes");
   const mongoose = require("mongoose");
   const cors = require("cors");

   const httpServer = express();
   httpServer.use(express.json());//middleware to show json content (put it above routes)
   httpServer.use(cors());//all site can access the data in database
   httpServer.use(routes);
   
mongoose.connect("mongodb://127.0.0.1:27017/db")
.then(function(){
    console.log("connected");
    httpServer.listen(3000,()=>{
     console.log("listening to port 3000");
    })
})
.catch(function(e){
    console.log("error"+e.toString());
})
