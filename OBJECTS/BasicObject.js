// First practice que.

// const product = {
//     name : "parker pen",
//     rating: 4,
//     offer : 5,
//   price : 250,
// };

// console.log(product);

// secon que

// const profile = {
//     name : "majid anwar",
//     post : 100,
//     foollowers : 5000,

// }
// console.log(profile);

//  airthemetic Operator in js.


// let a = 5;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


// modulus operator in js

// let a = 4;
// let b = 3
// console.log(a%b);

// exponential operator in js

// let a = 4;
// let b = 3
// console.log(a**b);

// increament  operator in js

// let a = 4;
// let b = 4;
// a++;
// console.log(a);


// decreament operator in js

// let a = 4;
// let b = 4;
// a--;
// console.log(a);

// post means baad me increament ya decreament krega ex => a++ , a--;
// pre means pahle increament ya decreament krega ex => --a , ++a ;


// Ternary Operators in js

// agar condition true hua to pahla output aayega false hua to second output aayega;


// let age =25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// check num is multiple of 5 or not

// let num = prompt("enter a num:");
// if(num%5===0){
//     console.log(num," is multiple of 5");
// }
// else{
//     console.log(num," is not multiple of 5");
// }


// calculate graddee of student .

// let marks = prompt("enter marks:");
// if(marks <= 100 && marks>=90 ){
//     console.log(marks,"A");
// }
// else if(marks < 90 && marks>=70 ){
//     console.log(marks,"B");
// }
// else if(marks < 70 && marks>=60 ){
//     console.log(marks,"C");
// }else if(marks < 60 && marks>=50 ){
//     console.log(marks,"D");
// }
// else{
//     console.log(marks,"F")
// }

// For-of loop.
// for-of loop har ek string ya array pe jkr usko iterate karta hai.
// for-of loop ka use kewal array aur string pe kiya jata hai.


// let str  = "apna laptop";
// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("size is",size);

// For-In Loop 
// For-In Loop ka use  object ka key  ke loye kiya jata hai

// let student = {
//      name : "rahul kaumar",
//      age : 20,
//      cgpa : 7.5,
//      isPass : true
// };
// delete student.name  // delete key.
// console.log(student);


// for(let key in student){
//     console.log("key =", key,"value =",student[key]);
// }


// print even num to 0 to 100.

// let a = 0;
// while(a <= 100){
//     if(a % 2 == 0){
//         console.log(a)
//     }
//     a++;
// }


// entered right number .

// let gameNum = 20;
// let usernum = prompt("Guess right number:");
// while(gameNum != usernum) {
//     usernum = prompt("Guess right number:");
// }


console.log("congratulations, you entered right number");