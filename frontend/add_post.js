
const AuthorName = document.querySelector("#AuthorName");
const Contents = document.querySelector("#Contents");
const btn = document.querySelector(".btn")

console.log(AuthorName,Contents);

function addPost(){
    var toSend = {
        postContent:AuthorName.value,
        postCreatedBy:Contents.value,
    };
    const jsonToString = JSON.stringify(toSend);
    fetch("https://localhost:3000",{
        method:"POST",
        headers:{  
            "Content-Type":   "application/json",
        },
        body : jsonToString,
    });
}
addPost();