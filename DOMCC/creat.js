const div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('id' ,'div');
div.innerText = "Hello Majid";
const span = document.createElement("span");
div.appendChild(span);
span.innerText = "ka hal ba";
span.style.Color = "yellow";
span.setAttribute("id","span");
const span1 = document.getElementById("span");
span1.style.color ="red";
const div1 = document.getElementById("div");
div1.style.color ="green";
div1.style.width = "100px";
div1.style.height= "100px";
div1.style.border = "dotted,2px";
div1.style.borderRadius = "5px";
div1.onclick = () => {
    alert("div is clicked");
}