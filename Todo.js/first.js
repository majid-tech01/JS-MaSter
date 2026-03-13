// let h = document.createElement('h1');
// h.textContent="ToDo List";
// document.body.appendChild(h);
// let form = document.createElement('form');
// document.body.appendChild(form);
// let input = document.createElement('input');
// let sumbtn = document.createElement('button');
// form.appendChild(input);
// form.appendChild(sumbtn);
// input.placeholder="Write here";
// sumbtn.innerText="Submit";
// let ul = document.createElement('ul');

// sumbtn.addEventListener("click",(e)=>{
//   e.preventDefault();
//   let li = document.createElement('li');
//   li.textContent = input.value;
//    ul.appendChild(li);
//    let del = document.createElement('button');
//    ul.appendChild(del);
//    del.textContent="Delete";
//    del.addEventListener('click',()=>{
//     li.remove();
//     del.remove();
//    })
// })
// document.body.appendChild(ul);

// let h = document.createElement('h1');
// h.textContent="Counter";
// document.body.appendChild(h);
// let h2 = document.createElement('h1');
// h2.textContent=0;
// document.body.appendChild(h2);
// incbtn = document.createElement('button');
// incbtn.innerText = "Increament";
// document.body.appendChild(incbtn);
// decbtn = document.createElement('button');
// decbtn.innerText = "decreament";
// document.body.appendChild(decbtn);
// incbtn.addEventListener("click",()=>{
  
//     h2.textContent

// })
// decbtn.addEventListener("click",()=>{
//   if(h2.textContent>0){
// h2.textContent--;
//   }

// })

// let num = Math.floor(Math.random()*21)-5;
// console.log(num);

// if(num%2==0){
//   console.log("Even");
// }6966544

// else console.log("Odd");

// let input = prompt("Enter number : ");
// console.log(input);
// if(input%2==0){
//   console.log("Even");
// }
// else console.log("Odd");

// let str = prompt("Enter String :");
// console.log("before reversed :",str);
// let reversed = str.split("").reverse().join("");
// console.log("After Reverse : ",reversed);

// function Reversed(){
//   let str = prompt("Enter String : ");
//   console.log(str);
//   let reversed = str.split("").reverse().join("");
//   console.log(reversed);
// }
// Reversed();

// let arr= [10,20,45,6];
// let max = arr[0];
// for(let i=0;i<arr.length;i++){
//   if(max<arr[i]){
//     max = arr[i];
//   }
// }
// console.log(max);

// let arr= [10,20,45,6];
// let Newarr=arr.filter((ele,index,arr)=> {
//   if(ele > 10){
//      return ele;
//   }
// });
// console.log(arr);
// console.log(Newarr);

// let arr = [10,20,45,6];
// let max = arr[0];

// arr.forEach(function(num){
//     if(num > max){
//         max = num;
//     }
// });

// console.log(max);

// let arr = [10,40,132,3];

// let max = Math.max(...arr);
// console.log(max);


// Todo List



let h = document.createElement('h1');
h.style.color="orange";
h.textContent="Todo List";
document.body.appendChild(h);
let inarea = document.createElement('input');
inarea.placeholder = "Enter Item";
inarea.style.color="black";
inarea.style.fontWeight="noraml";
document.body.appendChild(inarea);
let addbtn = document.createElement('button');
addbtn.style.backgroundColor="green";
addbtn.style.color="white";
addbtn.innerText = "Add Item";
document.body.appendChild(addbtn);
let ul = document.createElement('ul');
ul.textContent="TaskList";
ul.style.color="red";
document.body.appendChild(ul);
addbtn.addEventListener('click',()=>{
  let li = document.createElement('li');
  li.style.color="grey";
  li.textContent=inarea.value;
  ul.appendChild(li);
  inarea.value="";
  let delbtn = document.createElement('button');
  delbtn.style.backgroundColor="white";
  delbtn.style.color="red";
  delbtn.style.borderRadius="50px";
  delbtn.textContent="Delete Item";
  ul.appendChild(delbtn);
  delbtn.addEventListener('click',()=>{
    li.remove();
    delbtn.remove();
  })
})


//  Counter .


// let h = document.createElement('h1');
// h.textContent= "Counter";
// document.body.appendChild(h);
// let h1 = document.createElement('h1')
// h1.textContent=0;
// document.body.appendChild(h1);
// let incbtn = document.createElement('button');
// incbtn.innerText="IncBtn";
// document.body.appendChild(incbtn);
// let decbtn = document.createElement('button');
// decbtn.innerText="DecBtn";
// document.body.appendChild(decbtn);
// let reset = document.createElement('button');
// reset.innerText="ResBtn";
// document.body.appendChild(reset);

// incbtn.addEventListener('click',()=>{
//   h1.textContent++;
// })

// decbtn.addEventListener('click',()=>{
//   if(h1.textContent>0){
//     h1.textContent--;
//   }
// })
// reset.addEventListener('click',()=>{
//   h1.textContent=0;
// })


// let str = "Hello Wolrd";
// let count = str.split("").length;
// console.log(count);
