// let score = "100";
// console.log(score);
// console.log(typeof score);

// let convertNumber = Number(score);

// console.log(convertNumber);
// console.log(typeof convertNumber);

// alert(3+5);

// let number = 1;
// console.log(number);
// console.log(typeof number);

// let Boolenas = Boolean(number);
// console.log(Boolenas);
// console.log(typeof Boolenas);


// let message = "Hello Bhai Jaan How Are You !";
// let result = message.indexOf("J");
// console.log(result);

// let arr = [1,2,3,4,5];
// console.log(arr[4]);
// console.log(arr.length);
// arr.push(6,7);
// arr.pop();
// arr.unshift(-1,0);
// arr.shift();
// console.log(arr.indexOf(4));
// console.log(arr);

// let arr = [1,2,3,4,5];
// let newarr = [6,7,8];
// let all = arr.concat(newarr);
// console.log(all);


// let arr = [1,2,3,4,5];
// let newarr = [6,7,8];
// arr.push(newarr);
// console.log(arr);

// let arr = [1,2,3,[4,5],[6,7],[8,9,10],];
// let nestedinone = arr.flat(Infinity);
// console.log(nestedinone);

// let Year = 2004;
// switch(Year){
//     case 2002:
//     console.log("come in 2002");
//     break;
//     case 2006:
//     console.log("come in 2006");
//     break;
//     case 2004:
//     console.log("come in 2004 , Great Boy");
//     break;
//     case 2008:
//     console.log("come in 2008");
//     break;
//     case 2001:
//     console.log("come in 2001");
//     break;
//     case 2005:
//     console.log("come in 2005");
//     break;
//     default:
//         console.log("not coming never");
//         break;
// }


// let n=5;
// for(let i=1;i<=n;i++){
//     console.log("*".repeat(i));
// }

// *
// **
// ***
// ****
// *****


// let n=5;

// for(let i=5;i>=1;i--){
//     console.log("*".repeat(i));
// }

// *****
// ****
// ***
// **
// *

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row = row + j + ' ';
//   }
//   console.log(row);
// }

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 



// let n = 5;
// for (let i = 5; i >= 1; i--) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row = row + j + ' ';
//   }
//   console.log(row);
// }

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3
// 1 2
// 1

// filter 

// let arr = [1,2,3,4,56];
// let newarr = arr.filter((num)=>{
// return num<4;
// });
// console.log(newarr);
// let map = newarr.map((num)=>{
// return num*5;
// });
// console.log(map);


// let collegeData = [
//     {name:"majid",roll:'6030'},
//     {name:'puhh',roll:'1244'},
//     {name:'sim',roll:'1447'},
//     {name:'fahad',roll:'6015'},
//     {name:'farhin',roll:'6017'}
// ];

// let newdata = collegeData.filter((cl)=>{
// return cl.name == 'majid' && cl.roll == '6030';
// }) ;
// console.log(newdata);
// console.log(collegeData);

// foreach

// let arr = [1,2,3,4,5,6];

// let newarr = arr.forEach((index,value,arr)=>{
//     console.log(value);
// })



// let Menu = [
//     {
//         itemName:"oil",
//         price:200
//     },
//     {
//         itemName:"almond",
//         price:600
//     },
//     {
//         itemName:"dates",
//         price:1200
//     },
//     {
//         itemName:"elaichi",
//         price:2000
//     },
// ]

// let allAmount = Menu.reduce((acc,item)=>{
//     return acc + item.price;
// },0);
// console.log(allAmount);


// let arr = [1,2,3,4,5];

// let newarr = arr.slice(1,3);
// console.log(newarr);

// fetch API

// let n=5;
// for(let i=1;i<=5;i++){
//     console.log("*".repeat(i));
// }

// let n=5;
// for(let i=5;i>=1;i--){
//     console.log("*".repeat(i));
// }

// let n=5;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row = row+j;
//     }
//     console.log(row);
// }

// let n=5;
// for(let i=5;i>=1;i--){
//     let str = ""
//     for(let j=1;j<=i;j++){
//         str = str+j
//     }
//     console.log(str);
// }

// let arr = [42,'hello','javascript','world',100,'developer','Ai',true,'technology'];
// let newarr = arr.filter((element)=>{
//     if(typeof element === "string" && element.length <= 8){
//         return false;
//     }
//     else{
//         return true;
//     }

// })
// console.log(newarr);


// Calculate the Bill.

// let Itemsprice =
// {
//     "noodles":10,
//     "maggi":20,
//     "chapati":30
// }

// let menu=[
//     {
//         item:"noodles",
//         quantity:3
//     },
//     {
//         item:"maggi",
//         quantity:2,
//     },
//     {
//         item:"chapati",
//         quantity:4,
//     }
// ]

// function calculateBill(Itemsprice,menu){
// let TotalAmount = 0;
// for(let currentitem of menu){
//     let Amount = Itemsprice[currentitem.item]*currentitem.quantity;
//     TotalAmount = TotalAmount + Amount;
// }
// return TotalAmount;
// }
// console.log(calculateBill(Itemsprice,menu));

// let arr = [42,'hello','javascript','world',100,'developer','Ai',true,'technology'];

// let newarr = arr.filter((element)=>{
//     if(typeof element === "string" && element.length<=8){
//         return false
//     }
//     else{
//         return true
//     }
// })
// console.log(newarr);


// Calculate the Bill.

// let Itemsprice =
// {
//     "noodles":10,
//     "maggi":20,
//     "chapati":30
// }

// let menu=[
//     {
//         item:"noodles",
//         quantity:3
//     },
//     {
//         item:"maggi",
//         quantity:2,
//     },
//     {
//         item:"chapati",
//         quantity:4,
//     }
// ]


// function calculateBill(Itemsprice,menu){
//     let TotalAmount =0;
//     for(let currentitem of menu){
//         let Amount = Itemsprice[currentitem.item]*currentitem.quantity;
//         TotalAmount = TotalAmount+Amount
//     }
//     return TotalAmount;
// }
// console.log(calculateBill(Itemsprice,menu));


// let n=5;
// for(let i=1;i<=5;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str = str+"*"
//     }
//     console.log(str);
    
// }

// let n=5;
// for(let i=5;i>=1;i--){
//     let str = ""
//     for(let j=1;j<=i;j++){
//         str = str+"*"
//     }
//     console.log(str)
// }


// let n=5;
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str = str+i
//     }
//     console.log(str)
// }


// let n=5
// for(let i=5;i>=1;i--){
//     let str = ""
//     for(let j=1;j<=i;j++){
//         str = str + i;
//     }
//     console.log(str);
// }

// let n=5
// for(let i=1;i<=5;i++){
//     let str = ""
//     for(let j=1;j<=i;j++){
//         str = str+j
//     }
//     console.log(str)
// }

// let n=5
// for(let i=5;i>=1;i--){
//     let str = ""
//     for(let j=1;j<=i;j++){
//         str = str+j
//     }
//     console.log(str)
// }

let row = 5;
for(let i=1;i<=row;i++){
    let str = "";
    for(let j=1;j<=i;j++){
        str = str+"*"
    }
    console.log(str);
}