// const Box1 = document.getElementById("me");
// function showbca(){
//     Box1.innerText = "Hello Bca";
//     Box1.style.color = "white";
//     Box1.style.backgroundColor = "red";

// }

// Box1.addEventListener("dblclick",showbca);

// const input = document.getElementById("me");
// function alert(){
//     console.log(input.value)
// }
// input.addEventListener("keypress",alert);


// const input = document.getElementById("me");
// const any = document.getElementById("real");
//  input.addEventListener("input",function alert(){
//     para.innerText = input.value
//  });


// button thorught taken input writeen in paragraph.


// const input = document.getElementById("me");
// const button = document.getElementById("add");
// // const box = document.getElementById("container")
// button.addEventListener("click",function(){

//     // creating dynamic element.
//     for(let i=1;1<=100;i++){
        
    

    
//    const div = document.createElement("div");

//     // configure

//     div.setAttribute('class',"div");
//     div.style.height = "100px"
//     div.style.width = "100px"
//     div.style.backgroundColor = "red"

//     // placing my element in to dom tree

//     document.body.appendChild(div)
//     }
// })

// how to print 100 div in one click


// const btn=document.getElementById("btm");
// const Input = document.getElementById("enter")
// btn.addEventListener('click',function(){
//     for(let i=1;i<=100;i++){
        
        
        
//         const div=document.createElement('div');
//         div.createElement = Input.value
//         div.setAttribute('class',"div");
//         div.style.backgroundColor='red';
//         div.style.height="50px";
//         div.style.width="50px";
//         div.style.margin = "10px"
//         document.body.appendChild(div);
//     }
// })


// Calculate the Bill.

let Itemsprice =
{
    "noodles":10,
    "maggi":20,
    "chapati":30
}

let menu=[
    {
        item:"noodles",
        quantity:3
    },
    {
        item:"maggi",
        quantity:1,
    },
    {
        item:"chapati",
        quantity:4,
    }
]

function calculateBill (itemPrices,Menu){
let TotalAmount = 0;
for(let curentitem of Menu){
const Amount = itemPrices[curentitem.item] * curentitem.quantity;
TotalAmount+= Amount;
}
return TotalAmount;
}

 console.log( calculateBill(Itemsprice,menu));


// const input = document.getElementById("enter");
// const btn = document.getElementById("btm");
// const ul = document.getElementById("unordered");
// const del = document.getElementById("del");
// btn.addEventListener("click",function(){
//     const li=document.createElement("li");
//     const deleteButton=document.createElement("button");
//     deleteButton.innerText="delete"
//     const div=document.createElement("div");
//     deleteButton.addEventListener("click",()=>{
//         ul.removeChild(div)
//     })
//     li.innerText = input.value;
//     div.appendChild(li)
//     div.appendChild(deleteButton)
//     ul.appendChild(div);
//     li.style.color = "red";
// })
