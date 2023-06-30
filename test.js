const mongoose = require("mongoose");
const createPost = require("./functions");

mongoose.connect("mongodb://127.0.0.1:27017/db") //connect returns promise which includes .then() and .catch()
.then(function(){//promise is sth that takes a long time to execute and we don't know when it will end
    console.log("connected");
    
    createPost("hello","ankit")
})
.catch(function(e){
    console.log("error"+e.toString());
})
