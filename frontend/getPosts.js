console.log("hello")

fetch("http://localhost:3000/")
.then((res)=>{
    return res.text();
})
.then((jres)=>{
    console.log(jres);
    
    const jsonData = JSON.parse(jres);
    console.log(jsonData)
    for(var i=0;i<jsonData.length;i++){
        console.log(jsonData[i])
        insertPost(jsonData[i].createdBy,jsonData[i].createdAt);
    }
})
.catch((error)=>{
    console.log("error"+error)
})

function insertPost(author,createdAt){
    var toInsert = ` <div class="card">
    <div class="card-body">
    <h5 class="card-title">By ${author}</h5>
    <p class="card-text">
    time: ${moment(createdAt).format("ddd,h:m A")}
    </p>
    </div>
    </div>`;
    
    const container = document.querySelector(".posts-container");
    container.insertAdjacentHTML("afterbegin",toInsert);
}