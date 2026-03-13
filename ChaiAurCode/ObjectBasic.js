// OBJECT TOPICS.

// object.create => constructed methode


// OBJECT LITERALS.

// object ke value ko do type se access kar sakte hai.
// 01. objectname.key;
// 02. objectname["key"];
// koi bhi symbol ko key me define krne ke
//  liye aise likhte hai key me [key];
// FREEZE => YAH KR DENE SE OBJECT ME KUCH BHI CHANGE NHI HOGA.

// const menu = {
//     burger: 45,
//     "pen": 10,
//     copyprice:20,
// }

// console.log(menu.pen);
// console.log(menu["pen"]);
// menu.pen = 20;
// // Object.freeze(menu);
// menu.copyprice = 50;
// console.log(menu);

// menu.greeting = function(){
//     console.log(`burger price is = ${this.burger}`);
// }
// console.log(menu.greeting());


// 2nd CLASS OF OBJECTS.

// OBJECT SINGLETONE DECLARATION.

// const tinderuser = new Object()

// const tinderuser= {}
// tinderuser.id = "2413986030"
// tinderuser.name = "majid"
// tinderuser.isloggin = "yes"
// console.log(Object.keys(tinderuser)); // array me aata hai keys.
// console.log(Object.values(tinderuser)); // array me values aayega.
// console.log(Object.entries(tinderuser)); // array me ek ek kar ke key value de deta hai 
// console.log(tinderuser.hasOwnProperty('name')); // yah batata hai ki element hai ya nahi.
// console.log(tinderuser);

// const menu = {
//     card: "allItem",
//     onlyveg:{
//         fries:10,
//         dosa:70,
//         nonveg:{
//             item:{
//                 chiken:200,
//                 mutton:500,
//             }
//         }
//     }
// }
// console.log(menu.onlyveg.nonveg)


// OBJECT MERGE.

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1 , obj2}
// console.log(obj3);// object ke under obj aayega.
// const obj3 = Object.assign(obj1,obj2); // aise bhi merge right hoga.
// const obj3 = Object.assign({},obj1,obj2);// aise bhi merge right hoga.
// const obj4 = {...obj1, ...obj2}; // yah sabse right hai.
// console.log(obj4);


// OBJECT KO KAISE DESTRUCTER KARTE HAI ?.

// const course ={
//     coursename:"js in hindi",
//     courseprice: "999",
//     courseinstructer:"majid",
// }
// const{coursename:kuchbhi} = course // isi ko destructer krna bolte hai.

// console.log(kuchbhi);



