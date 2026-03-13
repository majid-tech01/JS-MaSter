// function sayMyName(){
//     console.log("M");
//     console.log("A");
//     console.log("J");
//     console.log("I");
//     console.log("D");
// }

// sayMyName()

function addTwoNumbers(number1 , number2){
    let result = number1 + number2;
    console.log("king");
    return number1 + number2
}
const result = addTwoNumbers(8,8);
console.log(result);
console.log(addTwoNumbers(64,6));


// ARROW FUNCTION.

// const user = {
//      username: "majid",
//      price: 999,
//      welcome: function(){
// console.log(`${this.username},welcome to website`)
// console.log(this)
//      }

// }
// user.welcome()
// user.username = "sam"
// user.welcome()
// console.log(this)

// const chai = () => {
//     let username = "majid"
//     console.log(this.username); // undefined aayega
//     console.log(this); // empty object aayega.
// }
// chai()


//JAB ARROW FUNCTION ME () LAGATE HAI 
// TAB RETURN LIKHTE HAI WARNA NAHI LIKHTE.


// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(5,4))


//AISE BHI ARROW FUNCTION DEFINE KAR SKTE HAI.

// const addtwo = (num1,num2)=>  num1+num2
// const addtwo = (num1,num2)=>  (num1+num2)
// const addtwo = (num1,num2)=>  ({username:"majid"})

// console.log(addtwo(5,4))



// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// (function chai(){
//     // named IIFE.
//     console.log(`db connected`);
// })();

// (()=>{
    
//     console.log(`db`);
// })()

