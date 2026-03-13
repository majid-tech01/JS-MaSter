// const laptop ={
//     brandName : "HP",
//     ram : "16gb",
//     graphic: "4gb",
//     memory : 512,
//     diplay : "15.6 inch",
//     battery : "4500mah",
// }

// console.log(laptop.ram);
// console.log(laptop.battery);
// console.log(laptop.memory);

// laptop.ram = 32;
// console.log(laptop.ram);
// // Object.freeze(laptop);
// laptop.ram = 64;
// console.log(laptop);

// laptop.any = function(){
//     console.log(`ram is ${this.ram}`);
// }
// console.log(laptop.any());

// array

// let mam = {
//     subj:"english",
//     height:"5feet",
//     face:"glowing",
//     hair:"long"
// };

// localStorage.setItem('mam',JSON.stringify(mam));  // isse local storage me data set karte hai strigify kr ke.
// JSON.parse(localStorage.getItem('mam'));   //
// localStorage.clear()  // isse sara localstorage me save kiya gya remove ho jata hai
// localStorage.removeItem('mam') // localStorage se delete krne ke liye is funcion me object ka name pass kr dete hai. 
// console.log(mam.height);


const p = document.querySelector("p");
const span2 = document.querySelector("span");
span2.innerText= "Hello OS"
span2.style.backgroundColor = "red";
let span1 = document.createElement("span");
span1.setAttribute("id","majid");
span1.innerText = "MajidTuHaiKon";
span1.innerText = '<p>hello</p> <div>hello world </div>';
p.appendChild(span1);




