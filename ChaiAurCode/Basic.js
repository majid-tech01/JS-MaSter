
// "use strict" ; // treat all JS code as newer version.

// alert(3 + 5);
//console.log("Majid");


// 01 =>  DATA TYPES TOPICS.



// number => 2 tp power 53.
// bigint
// string =>""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique



/*
  note => Null ek object hai.
*/



// object



// console.log(typeof 3); // Number
// console.log(typeof "Majid");  // string
// console.log(typeof Majid); // undefined 
// console.log(typeof true);  // Boolean
// console.log(typeof false); // Boolean
// console.log(typeof null);  // Object


// 02 => DATA TYPE CONVERSIONS AND OPERATIONS TOPIC



// How to convert string to Number.

// let score = "100";
// console.log(typeof score);

// let convertNumber = Number(score);
// console.log(convertNumber);
// console.log(typeof convertNumber)


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
// null => 0
// undefined => NaN

// hot to cover Number in Boolean.

// let Number = 1;

// let booleanIs = Boolean(Number);
// console.log(booleanIs);
// console.log(typeof booleanIs);

// let Known = 0;

//  let numberisboolean = Boolean(Known);
//  console.log(numberisboolean);
//  console.log(typeof numberisboolean);

// 1 => true; 0 => false
// "" => false
// "Majid" => true


// how to convert number in string.


// let number = 24;

// let isStirng = String(number);
// console.log(isStirng);
// console.log(typeof isStirng);


// string concatation


// console.log(1 + "2");  // 12
// console.log(1+2+"3"); // 33
// console.log("1"+2+3);  // 123


// data comparison


// console.log(2 < 1);
// console.log( 2>= 1);
// console.log(2 == 2);
// console.log(2 != 2);

// console.log("2" > 1);  // true
// console.log("02" > 1);  // true


// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null < 0);  // false
// console.log(null >= 0);  // true
// console.log(null <= 0);  // true


// console.log("2" === 2);


// primitive


// ex => 7 types => String, Number, Boolean, null, undefined, symbol, BigInt



// Reference type ( non primitive)


// array, Objects, Functions


// indexof
// charAt
// substring
// slice
// trim
// replace
// split





// indexof work

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("w");
// console.log(result);
              // OR

  // let text = "Hello world, welcome to the universe.";
  // console.log(text.indexOf("c"));



// charAt work.

//  let text = "Hello world, welcome to the universe.";
//  let result = text.charAt(2);
//  console.log(result);



// substring work.yah slice jaisa kaam karta hai.

//  let text = "Hello world, welcome to the universe.";
//  console.log(text.substring(0,5));



// TRIM work. statring se space hata deta hai.

  // let text = "                Hello world, welcome to the universe.";
  // console.log(text.trim());



// replace work.



// let text = "Hello world, welcome to the universe.";
//   console.log(text.replaceAll("Hello","Mello"));


// split work. har space ke jagah koma de deta hai.


  // let text = "Hello world welcome to the universe";
  // console.log(text.split(" "));




  // Number and maths Topics.

//   let score = 400;
//   console.log(score);

//   const balance = new Number(200)
//   console.log(balance);

//   console.log(balance.toString().length) // string me number ko change krne ke liye
// console.log(balance.toFixed(2)); // koi number ke baaad kitna decimal 0 chahiye.
// const million = 10000000
// console.log(million.toLocaleString("en-IN"));



// DATE AND TIME TOPICS.



// let mydate = new Date()
// console.log(mydate.toString());
// console.log(typeof mydate); // Object.
// console.log(mydate.toDateString()); // yah sirf day aur date deta hai.
// console.log(mydate.toLocaleDateString()); // yah kewal deta hai aise dd/mm/yyyy.
// console.log(mydate.toISOString()); // yyyy/mm/dd aise deta hai.
// console.log(mydate.toJSON()); // yah same ISOstring jaisa deta hai.
// console.log(mydate.toLocaleTimeString()); // yah sirf time batata hai.
// console.log(mydate.toUTCString()); // yah day time date sara deta hai


// let myCeatedDate = new Date(2025,3,16,6,12)
// console.log(myCeatedDate.toDateString());
// console.log(myCeatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));


// let newDate = new Date();
// console.log(newDate.toDateString());
// console.log(newDate.getDate());
// console.log(newDate.getMonth());

// newDate.toLocaleString('default',{
//   weekday: "long",
// })


// ARRAY TOPICS.


// const arr = [1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr.length)



// ARRAY METHODES



// 01. PUSH => array ke last index pe value add karta hai.

// const arr = [1,2,3,4,5];
// arr.push(6); 
// console.log(arr); // output is => [1,2,3,4,5,6]



// 02.POP => array ke last index se value remove karta hai.

// const arr = [1,2,3,4,5];
// arr.pop();  
// console.log(arr); // output is => [1,2,3,4]




// 03. UNSHIFT => array ke first index pe value add karta hai.

  // const arr = [1,2,3,4,5];
  // arr.unshift(0);
  // console.log(arr); // output is => [0,1,2,3,4,5];



// 04. SHIFT => arra ke first index se value remove karta hai.

// const arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr); // output is => [2,3,4,5];



//05. INCLUDES => yah array me element check krta hai agar element hoga to true dega nhi to false dega.

// const arr = [1,2,3,4,5];
// console.log(arr.includes(0)); // 0 nhi hai to false aya output.
// console.log(arr);



// 06. INDEXOF => yah kisi bhi element ka index batata hai agar wo hoga to otherwise -1 dega.

// const arr = [1,2,3,4,5];
// console.log(arr.indexOf(2)); // jaise 2 ka index 1 diya output.
// console.log(arr);



// 07. JOIN => yah purane array ke value ko newarray me 
// dal deta hai aur us new array ka typeof string hota hai.


// const arr = [1,2,3,4];
// const newaray = arr.join()
// console.log(arr);
// console.log(newaray);
// console.log(typeof newaray);




  

  // ek array ko araay ke uner push 
  // krne pe aise result aata hai


  // const my_hero = ["bhaijaan","abba","bhanja"];
  // const dear = ["mahuu","majid","puhh"];
  // my_hero.push(dear);
  // console.log(my_hero);// ["bhaijaan","abba","bhanja",["mahuu","majid","puhh"]];
  // console.log(my_hero[3][2]) // puhh


  // ek array ko ek array ke under concate sawar aise kr skte hai.


  // const my_hero = ["bhaijaan","abba","bhanja"];
  // const dear = ["mahuu","majid","puhh"];
  // const all_fvrt = my_hero.concat(dear);
  // console.log(all_fvrt);//[ 'bhaijaan', 'abba', 'bhanja', 'mahuu', 'majid', 'puhh' ].

  // do array ko ...array_name,...array_name aise kitna
  //  bhi array ko jor sakte hai


  // const my_hero = ["bhaijaan","abba","bhanja"];
  // const dear = ["mahuu","majid","puhh"];
  // const all_heros = [...my_hero,...dear];
  // console.log(all_heros);



  // FLAT => kitne bhi nested array ho usko ek array me kar deta hai.

  // const manyarrays = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
  // const all_array_inone = manyarrays.flat(Infinity);
  // console.log(all_array_inone); // output => [1,2,3,4,5,6,7,8,9,10,11]
    
 