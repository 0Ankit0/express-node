const post = require("./db/posts");

function createPost(postContent,postCreator){
    return post.create({
        content:postContent,
        createdAt:Date.now(),
        createdBy: postCreator,
    }).then(function(post){
        console.log("post created");
    }).catch(function(error){
        console.log("Error"+error)
    })
}
module.exports = createPost;