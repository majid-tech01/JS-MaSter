fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    for(let i=0;i<data.length;i++){
    const div = document.createElement('div');
    const userId = document.createElement('p');
const id = document.createElement('p');
const title = document.createElement('p');
const body = document.createElement('p');
userId.textContent=data[i].userId;
id.textContent=data[i].id;
title.textContent=data[i].title;
body.textContent=data[i].body;
div.appendChild(userId);
div.appendChild(id);
div.appendChild(title);
div.appendChild(body);
document.body.appendChild(div);
}
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

// async function callapi(){
//     try{
//         let data = await fetch("https://jsonplaceholder.typicode.com/posts")
//         console.log(data);
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// callapi();
