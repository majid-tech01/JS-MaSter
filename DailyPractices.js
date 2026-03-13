// let Car = {
//     name : 'sierra',
//     Brand_Name:'tata',
//     Milage:20,
//     Price:1500000
// }
// delete Car.Milage
// console.log(Car.name);
// console.log(Car['Milage'])
// Car.Price = 2000;
// console.log(Car.Price)
// for (const key in Car) {
//     console.log(key,Car[key])
// }

// let User = {
//     name:'Majid',
//     greet:function(){
//         console.log('Hello ' + User.name);
//     },
//     print:function(){
//         console.log("where are you from ?");
//     },
//     Location:'Bihar',
//     where:function(){
//         console.log("I am from "+this.Location);
//     }
// }

// User.greet();
// User.print();
// User.where();

// let mobile = {
//     brand : 'Samsung',
//     model : 'Galaxy S23',
//     price : 75000,
//     colors: ['Black','White','Blue'],
//     isAvailable : true,
//    details: {
//         ram : '8GB',
//         storage : '128gb',
//     },
//     ShowInfo:function(){
//         console.log(this.brand +" "+ this.model + ' costs ' + this.price+);
//     }
// }         


// mobile.ShowInfo()

// num = Math.floor(Math.random()*21)-10;
// console.log(num);



function onetoTen(){
    for(let i=0;i<=10;i++){
        console.log(i);
}
}
setTimeout(onetoTen,5*1000);