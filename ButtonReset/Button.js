const h1 = document.createElement('h1')
h1.innerText = "Counter";
const button = document.createElement('button');
button.innerText = "Reset";
const button1 = document.createElement('button');
button1.innerText = "Increament";
const button2 = document.createElement('button');
button2.innerText = "Decreament";
const plus = document.createElement('h1');
plus.textContent=0;

button1.addEventListener('click',()=>{
    plus.textContent++;
})

button2.addEventListener('click',()=>{
    plus.textContent--;
})

button.addEventListener('click',()=>{
    plus.textContent=0;
})
document.body.appendChild(h1);
document.body.appendChild(plus);
document.body.appendChild(button);
document.body.appendChild(button1);
document.body.appendChild(button2);
