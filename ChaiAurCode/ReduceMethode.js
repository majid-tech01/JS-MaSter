

// REDUCE METHODE() => 


    // const myNumsArr = [1,2,3,4];
    
    // const Total = myNumsArr.reduce( (acc,currval) => {
    //     return acc + currval;
    // } ,0);

    // console.log(Total);


    // EXAMPLE QUESTIONS .


    const shopingcarts = [
        {
            coursename: 'Js course',
             price: 4999
        },
        {
            coursename: 'Java course',
            price: 6999
        },
        {
            coursename: 'Dsa course',
            price: 7999
        },
        {
            coursename: 'Ai course',
            price: 19999
        },
    ]

    const TotalBill = shopingcarts.reduce( (acc,item) =>{
        return acc + item.price;
    },0);

    console.log(TotalBill);


    // EXAMPLE QUESTIONS.


    // const menu = [
    //     { id: 1, name: "Burger", category: 1, price: 10 },
    //     { id: 2, name: "Fries", category: 2, price: 5 }
    //    ]

      
    //    const TotalAmount = menu.reduce( (acc,item) => {
    //     return acc + item.price;
    //    },0 );

    //    console.log(`TotalAmount = ${TotalAmount}`);
       