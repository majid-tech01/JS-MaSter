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


// 08. SLICE => slice first range se lekr last range se 
// ek kam data print karta hai aur oroginal array se 
// data remove nhi karta hai

  // const arr = [1,2,3,4,5];
  // console.log(arr);
  // const newarr = arr.slice(0,3);
  // console.log(newarr); // output => [1,2,3]; 
  // console.log("after slice ",arr); // output => [1,2,3,4,5];


  // 09. SPLICE => yah first range se last range
  //  tak data ko print karta hai aur original 
  // array se wah data remove kar deta hai


  // const arr = [1,2,3,4,5];
  // console.log(arr);
  // const newarr1 = arr.splice(1,3);
  // console.log(newarr1); // output => [2,3,4]; 
  // console.log("after splice",arr); // output => [1,5];


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


//   FLAT => kitne bhi nested array ho usko ek array me kar deta hai.

//   const manyarrays = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
//   const all_array_inone = manyarrays.flat(Infinity);
//   console.log(all_array_inone); // output => [1,2,3,4,5,6,7,8,9,10,11]
    