

// FOR IN LOOP => OBJECT PAR KAAM KARTA HAI.
//             => ARRAY PAR BHI KAAM KARTA HAI.


const myobject = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by",
}

for (const key in myobject) {
        console.log(`${key} shortcut is for ${myobject[key]}`);   
    }



    // const arr1 = [1,2,3,4,5];

    // for (const key in arr1) {
    //     // console.log(`${key} index valus is ${arr1[key]}`);
    //     // console.log(key); // index print hota hai.
    //     console.log(arr1[key]); // value print hota hai.
    // }