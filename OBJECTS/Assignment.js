let Heading = document.getElementById("head");
let Button = document.getElementById("click-Btn");
let div = document.getElementById("Div");
let ChangeColor = document.getElementById("change-Button");
let MoveDiv = document.getElementById("div-move");
let MoveButton = document.getElementById("move-Button");
let leftPos=0;
Button.addEventListener("click",()=>{
    setTimeout(()=>{
        Heading.innerText="Hello! This is a delayed greeting!"
    },3000);
})

ChangeColor.addEventListener("click",()=>{
    setTimeout(()=>{
        div.style.backgroundColor = "green";
    },2000);
})

MoveButton.addEventListener("click",()=>{
    setInterval(() => {
        leftPos+=1;
        MoveDiv.style.marginLeft = leftPos+"px";
    }, 5);
})

