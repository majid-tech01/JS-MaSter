// promise

// promise is a container for a future value.




// promise has three state.
// 01. pending.
// 02. rejected.
// 03. fullfilled.

console.log(Promise);

function callback(resolve,reject){
    reject();
}

const newPromise = new Promise(callback);

newPromise.then(()=>{
    console.log("hello");
});

newPromise.catch(()=>{
    console.log("catch");
});