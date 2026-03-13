const inventory = [
    {id:1 ,name:"apple",price:2,quantity:10},
    {id:2 ,name:"banana",price:1,quantity:5}
];

const action = [
    {productId:1,types:"sales",quantity:3},
    {productId:2,types:"purchase",quantity:4}
];



function updateInventory(inventory , action){
    action.forEach((value)=>{
        let i = inventory.filter((element)=>{
            if(element.id === value.productId){
                return true
            }
        })
        let quantity;
        if(value.types === "sales"){
            quantity = element.quantity - value.quantity;
        }
        else{
            quantity = element.quantity + value.quantity
        }
    });
    const totalvalue = inventory.reduce((total,item)=>{
        return total + item.quantity * item.price
    },0);
    return totalvalue;
}

console.log(updateInventory(inventory, action));