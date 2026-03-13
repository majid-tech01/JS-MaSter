

// Filter methode() = > filter kr ke new array deta hai.

// const myarray = [1,2,3,4,5,6,7,8,9];

// const newarray = myarray.filter( (nums) => {
//     return nums < 8;
// } ) ;

// console.log(newarray);


// const castestnum = [
//     {
//         title : 'shaikh', cast: 'general', publish:'1890',
//     },
//     {
//         title: 'syed', cast: 'general', publish:'1990',
//     },
//     {
//         title: 'ansari', cast: 'obc', publish: '2000',
//     },
//     {
//         title: 'hajam', cast: 'ebc', publish : '2004',
//     },
// ]

// let  newdata = castestnum.filter( (ct) => {
//     return ct.cast === 'general' && ct.publish === '1890';
// } );

// console.log(newdata);

const Input= [5, 12, 8, 25];
const Filter =Input.filter((num)=>{
    return num>20;
     
});
const multi = Filter.map((num)=>{
    return num*2;
})
console.log(multi);
