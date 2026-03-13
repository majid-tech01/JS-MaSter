/*
var i , j, n = 5;
for(i = 1; i <= n; i--){
    var str = " "
    for(j = 1; j <= i; j++){
        str += "*";
        }
        console.log(str);
       
}
*/
  

/*
let i,j,n=7;
for(i=1;i<=n/2+1;i++){
    let str = "";
    for(j=0;j<=n/2-i;j++){
        str+=" ";
    }
    str+="*"
    console.log(str);
}
for(i=1;i<=n/2;i++){
    let str = "";
    for(j=0;j<n/2+i;j++){
        str+=" ";
    }
    str+="*";
    console.log(str);
}
    */


/*
let i,arr = [1,2,3,4];
for(i=4,i>=0;i--;){
    arr [i + 1] = arr[i];
   

}

arr[0] = 0;
console.log(arr );
*/

/*
let a  = 1;
console.log( typeof a);

let A1 = Boolean(a);
console.log(A1);
console.log(typeof A1);
*/


/*
let name = "Majid";

if("majid" == name){
    console.log('Equal');
}
else{
    console.log('Not Equal');
}
*/

/*
let str = " This is Javascript tutorial. It is a good tutorial.";

let majid = str.includes('is');
console.log(str);
console.log(majid);
*/

// Array

/*
let book = ["math","physics","king"];
book.splice(0 , 1);
console.log(book);
*/

// how convert any text in array.

/*
let txt = "this is my pen";
let convertarray = txt.split(" ");
console.log(convertarray);
*/

// how to any array in text.

/*
let txt = ["math", "physics", "bio"];
let convertarray = txt.join("~");
console.log(convertarray);
*/

// add array in other array.
/*
let book = ["math","phys","bio","urdu"];
let name = ["shahid","majid","huma"];
let newarray = book.concat(name);
console.log(newarray);
*/
// this is nested array.
/*
let array = [
    ["majid","5",["100","200"]],
    ["Huma","4"],
    ["Laptop","6"]
];
let majid = array[0][2][0];
console.log(majid);
*/

// how to access array one by one element.

/*
let book = ["math","bio","sst","urdu",];

let book1 = book.length;

for(i = 0;i < book1;i++){
    console.log(`Element ${i} is ${book[i]} \n`)
}
*/
 // second methode of acess array one by one element.
 /*
let phone = ["iphone","moto","oneplus"];
phone.forEach(majid);
function majid(each){
    console.log(each);
}
*/

/*let book = ["math","phys","bio","urdu"];
book.splice(2,1,"majid");
console.log(book);
 */


 
 /*
function sum(a,b){
    console.log( a+b);
 }
 sum(2,"6")
 */
// FUNCTIONS.
// how to define function.
/*
function odd(){

}
*/
// function basic use .
/*
function multable(num){          // () iske under ke variable ko parameter bolte hai.
    for(let i=1;i<=10;i++){ 
        document.write(` $(num) * ${i} = ${num*i}`);  
        document.write("<br>");
    }
    
}
multable(2);        // () iske under ke value ko argument bolte hai.
document.write("<br>");
multable(7);
*/
// how to use multiple parameter or multiple argument in function.
/*
function mult(digit1,digit2){
    document.write(digit1 * digit2);
}
mult(10, 20);
*/
  // how to find array in function thrugh argument.
  /*
function name(){
    console.log(arguments[2]);
}
name(1,2,4);
*/
/*
function any(){
    if( arguments.length == 0){
        console.log("no argument passed!");
    }
    else{
        let sum = 0;
        for(let i = 0; i<arguments.length;i++){
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}


any(8,5);
*/ 

// return function .
/*
function add(a,b){
    if(a>b){
        return 1;
    }
    else if(b>a){
        return -1;
    }
    else{
        return 0;
    }
    
}
let addition = add(6,5);
document.write(addition);
*/


// Global Varaiables vs Local Variables.
/*
let car = "audi";    //Global Variables :- jo function ke bhr define jta  hai aur uska scope function ke bhr bhi aur under bhi hota hai.

function add(){
    
    let result = 34;   // Local Variables :- jo function me define kiya jata hai aur iska scope function ke under tak hi hota hai.

}

add();
*/

// Anonymous Function.
// Function expression.

//  let name = function (){
//     console.log("hello king!");
// }
// name(); 

// koi bhi value console karao par wah kitne time baad dikhe iske liye setTimeout ka use krte hai .

//  function show(){
//     console.log("Hello");
    
//  }
//  setTimeout(show,3000);

// Immediately invoked function.
/*
(function (){
    let string = "majid";
    console.log(string);
    alert(string);
})();
*/

// Object in JavaScript.

// let phone = {
//     mobile_name: 'iphone 14', // variable ka name space ke sath lena ho to single coma ke under likhenge .
//     brandname:'apple'

// };
// phone.storage = 128;  //modify object properties.
// delete phone.brandname;  // isse oject ka element delete hota hai.

// console.log(phone);
// console.log('storage' in phone); // isse check hota hai ki property assign hua hai ya nahi. 

// first methode of .sayHello.
//   phone.sayHello = function (){
//     console.log("Hello !");
//  }

//  phone.sayHello();
// first methode of .sayHello.
// function greet(){
//     console.log("Hello !");
// }
// phone.sayHello = greet;

// how to define object in js.
// let laptop = {
//     brand : 'Hp',
//     model : 'hp15s',
//     sayHello (){              // it is a mothode.
//         console.log(" Hello ! my name is "+ name.firstname+" And i have a "+this.brand+" brand laptop model name is "+laptop.model+" ");
//     }  // first object ko this. ke sath likh sakte hai jaise upper likhe hai.
// };
// let name = {
//     firstname:'Majid',
//     lastname:'Anwar',
// }
// console.log(laptop.brand);
// laptop.sayHello();


// Math Object.

// maths ke sare probalem ko hal karega math object.

// console.log(Math.PI)   // pi ka value de dega.
// console.log(Math.E)
 
// .Round
// var a = Math.round(4.7); // 0.5 se upper to 1 deg a0.5 se niche to 0 dega .round .
// console.log(a);
 
// .Ceil .
 
// var a = Math.ceil(4.2); // 4.1 se upper to 5 dega ya 4.9 ho tb bhi to 5 dega .round .
// console.log(a);

// .Floor .

// var a = Math.floor(4.9); // 4.1 se upper ho ya 4.9 ho phir bhi 4 hi dega .
// console.log(a);

// .Trunc .

// var a = Math.trunc(4.9); // point hata dega.
// console.log(a);

// .Power.

// var a = Math.pow(4,2);
// console.log(a);

// .SQRT.

// var a = Math.sqrt(49);
// console.log(a);

// .min. Find minimun value;

// var a = Math.min(4,2,3,6,8,-1);
// console.log(a);

// .Max FInd max value;

// var a = Math.max(4,2);
// console.log(a);

// Random number .

// let x = Math.floor( Math.random() *12) + 1; // 0 se 1 ke bich ka number generate karta hai
// console.log(x); // jitna number chahiye usse ek jyada se multiple kaara denge

// yadi kisi bich ka number chahiye to use krte hai jaise isme 15-25 tak ka chahiye tah.
//  function getrandom(max , min){
//     let x = Math.floor(Math.random() * (max-min)) + min;
//     return x;
//  }
//    console.log(getrandom(10,20));

// Date Object .

// let x = new Date("october 13,2018 12:30:53");
// let y = Date("");
 
// new keyword.

// var person = {
//     name : "majid",
//     age:20,
// }
// var person = new Object();
// person.name = "majid anwar";
// person.age = 20;
// console.log(person.name)

// getter setter  function.

// var person = {
//      name: "majid",
//      age: 20,
    //  getname : function (){
    //     return this.name.toUpperCase();
    //  }
    // getter function.
    // get getname(){
    //     return this.name.toUpperCase();
    // },
    // setter function.
//     set setname(n){
//         this.name = n.toUpperCase();
//     }
// };
// person.setname = "king"
// console.log(person)

// obect constructer.

// var student1 = {
//     firstName: "majid",
//     lastName : "anwar",
//     age: 25,
//     class: 5
// }

// function Student(first , last , age , cls){   //  constructer function 
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }
// Student.prototype.gender = "male"; // add property in constructer
// var student1 = new Student("majid","anwar",20,10);
// var student2 = new Student("mjid","awar",18,2);
// var student3 = new Student("ajid","nwar",19,8);
// student1.nationality = "Indian"; // Add property.
//  console.log(student1);
//  console.log(student2);

// Nestde Object.

// var user = {
//     id : 6030,
//     email: "majid@gmail.com",
//     personalInfo:{    // nested object.
//         name:"majid",
//         address:{
//             street:"kawalpur",
//             city: "motihari",
//             country:"india",
//         }
//     }
// };
//  console.log(user.personalInfo.address.city)


// Hoisting 
// js sabse pahle pura coad padhta hai aur declaration ko sabse pahle le leta hai isi ko hositing kahte hai
// hello();

// function hello(){
//     console.log("majid")
// }

// x = 8;  // assignment

// console.log(x);

// let x;


// "use strict"  // yah agar variable declarattion nhi hoga to error dega.
// x = 4;
// console.log(x);

// element selection .

// 1. max element find in array.

// let arr = [1,2,5,3,4];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }

// console.log(max);

// 2. sum of all element  in array.

// let arr = [1,2,3,4];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i];
// }

// console.log(sum);


// 3 find 10 aur 10 se bara.

// let arr = [5,10,15,3,7];
// let newArray=[]
// let greater = 10;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=greater){
//         newArray.push(arr[i]);
//     }
// }
// console.log(newArray);

// 4. convert in celcius.

// let Array = [2,4,6,8,10];
// function convert(element){
//  return (element*9/5)+32;
// }
// const cvrt = Array.map(convert);
// console.log(cvrt);

//  for EACh

// let arr= [1,2,4,5];
// arr.forEach(function(element,index,arr){

//     console.log(element);
//     console.log(index);
// })

// map iterartors.

// let arr = [1,2,5,5];
// let newarr = arr.map(function(element,index,arr){
// if(element % 2 == 0){
//     return element;
// }
// })
// console.log(newarr);

// filter iterators

// let arr = [1,2,5,5];
// let newarr = arr.filter(function(element,index,arr){
//     if(element >2){
//         return true;
//     }
// })
// console.log(newarr);


// let arr = [42,'hello','javascript','world',100,'developer','Ai',true,'technology'];
// let newarr = arr.filter(function(element,index,arr){
//     if(typeof element === "string" && element.length <= 8){
//         return false;
//     }
//     else{
//         return true;
//     }

// })
// console.log(newarr);

// pyramid first.

//  *
//  **
//  ***
//  ****

// let n;
// let row = prompt("enter no of rows",n);
// for(let i=1;i<=row;i++){
//     let str = " ";
//     for(let j=1;j<=i;j++){
//         str= str + "*";
//     }
//     console.log(str);
// }

// second methode.
// let n;
// let row = prompt("enter no of rows",n);
// for(let i=1;i<=row;i++){
//     let str = " ";
//     str = "*".repeat(i);
//     console.log(str);
// }
    

// pyramid second.

// *****
// ****
// ***
// **
// *

// let n;
// let row = prompt("enter number of row:",n);
// for(let i=row;i>=1;i--){
//     let str = " ";
//     for(j=1;j<=i;j++){
//         str = str + "*";
//     }
//     console.log(str);
// }

// third pyramid .

//    *
//   **
//  ***
// ****

// First methode.

// let n;
// let row = prompt("enter number of row:",n);
// for(let i=1;i<=row;i++){
//    let str = "";
//   str = " ".repeat(row-i)+ "*".repeat(i);
//     console.log(str);
// }

// second methode.
// let n;
// let row = prompt("enter no of row",n);
// for(let i=1;i<=row;i++){
//     console.log(" ".repeat(row-i) + "*".repeat(i));
// }


// Fourth pyramid 

// ****
//  ***
//   **
//    *

// let n;
// let row = prompt("enter no of row",n);

// for(let i=row;i>=1;i--){
//     let str = " ";
//     str = " ".repeat(row-i) + "*".repeat(i);
//     console.log(str);
// }

// six pyramid.

//    *
//   ***
//  *****

// let n;
// let row = prompt("enter no of row",n);

// for(let i=1;i<=row;i++){
//    let str =" ".repeat(row-i) + "*".repeat(2*i-1) + " ".repeat(row-i);
//   console.log(str);
// }

// seventh pyramid.
 
// ****
// ****
// ****
// ****

// let n;
// let row = prompt("enter no of rows:",n);
// for(let i=1;i<=row;i++){
//     let str="*".repeat(row);
//     console.log(str);
// }

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
// let n;
// let row = prompt("enter no of rows",n);
// for(let i=1;i<=row;i++){
//     let str = " ";
//     str =  " ".repeat(row-i)+"*".repeat(2*i-1)+" ".repeat(row-i);
//     console.log(str);
// }
//     let m;
//     let row1 = prompt("enter no of rows:",m);
//     for(let i=row1;i>=1;i--){
//         let str1 = " ";
//     str1 =  " ".repeat(row-i)+"*".repeat(2*i-1)+" ".repeat(row-i);
    
//     console.log(str1);
// }

// let user =[
//     {name:"john Doe1", number: 12},
//     {name:"john Doe2", number: 17},
//     {name:"john Doe3", number: 20},
//     {name:"john Doe4", number: 25}
// ]
    
// let ResultArr = [];

// for(let i = 0;i<user.length; i++){
//     let obj = user[i];
//     obj.number;
//     ResultArr.push(obj);
// }
// console.log(ResultArr);

// let user = [
//     {name:"jhon Doe1", number: 12},
//     {name:"jhon Doe2", number: 34},
//     {name:"jhon Doe3", number: 89},
//     {name:"jhon Doe4", number: 56}
//    ]

//    let resultArr = []

//    for(let i = 0; i<user.length; i++){
//     let obj = user[i]
//     obj.number += 5;
//     resultArr.push(obj)
//    }

//    console.log(resultArr)
// console.log(a);
// let a = 10;
// var b = 20;


// setTimeout

// function console5(){
//     console.log(5);
// }

// setTimeout(console5,3000);

// setInterval

// function console5(){
//     console.log(5);
//     // if()
// }

// setInterval(console5,1000);

// let a = document.getElementById("a")
// console.log(a);

// console.warn.

// console.warn("ruk ja warna chud jayega");
// console.error("chud gya n");

//  array ke last index pe add push se hota hai aur pop se last index se remove hota hai.

// let arr = [1,2,3,4];
// arr.push(5,6);
// console.log("after push",arr);
// arr.pop();
// console.log("after pop",arr);


// array ke starting index par unshift se add hota hai aur shift se remove hota hai.

// let arr = [1,2,3,4,5];
// arr.unshift(0);
// console.log("after unshift",arr);

// arr.shift();
// console.log("after shift",arr);

// let pen = {
//     brand : "link",
//     price:"10",
//     manu:"delhi",
// }

// console.log(pen.brand);

// const Box = document.getElementById("box");
// const Btn = document.getElementById("btn");

// Btn.addEventListener("click",()=>{
//     alert("button is clicked");
// },true);

// Box.addEventListener("click",()=>{
//     alert("div is clicked");
// },true);


// document.body.addEventListener("click",()=>{
//     alert("body is clicked");
// },true);


// const button = document.getElementById('btn');
// const h = document.getElementById('king');
// button.addEventListener('click',()=>{
//     setTimeout( ()=>{
//         h.innerText= "Hello! This is a delayed greeting"
//     },3000);
// })

