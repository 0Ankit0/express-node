const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    PostContent:String,
    createdAt:Date,
    PostCreatedBy: String,
})

const post = mongoose.model("post",postSchema); // create collection named post

module.exports = post