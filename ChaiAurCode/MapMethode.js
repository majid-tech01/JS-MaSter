

// MAP MEHTODE => ARRAY ME SARE VALUE PE JKR ADD SAB KUCH KAR SAKTA HAI.


const myarr = [10,23,45,67,766,344];

const mynums = myarr.map( (add) =>  {
    return add + 10;
}) ;
console.log(mynums); // [ 20, 33, 55, 77, 776, 354 ]


// CHAINING.

// const myNUmArr = [11,21,31,41,51,61,71,81,91];

// const multarr = myNUmArr.map( (mult) => {
//     return mult * 10;
// } ) .map( (mult)=> {
//     return mult + 10;
// } ).filter( (mult) => {
//     return mult % 5 != 0;
// } )
// console.log(multarr); // []


