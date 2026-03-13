const arr = [
    {"id":1,"name":"John Doe","username":"johndoe","email":"johndoe@example.com","address":"123 Main St"},
    {"id":2,"name":"Jane Doe","username":"janedoe","email":"janedoe@example.com","address":"456 Market St"},
    {"id":3,"name":"Jim Smith","username":"jimsmith","email":"jimsmith@example.com","address":"789 Oak St"},
    {"id":4,"name":"Sara Wilson","username":"sarawilson","email":"sarawilson@example.com","address":"111 Maple Ave"},
    {"id":5,"name":"Bob Johnson","username":"bobjohnson","email":"bobjohnson@example.com","address":"222 Elm St"},
    {"id":6,"name":"Amy Williams","username":"amywilliams","email":"amywilliams@example.com","address":"333 Pine St"},
    {"id":7,"name":"Michael Brown","username":"michaelbrown","email":"michaelbrown@example.com","address":"444 Cedar St"},
    {"id":8,"name":"Emily Davis","username":"emilydavis","email":"emilydavis@example.com","address":"555 Birch St"},
    {"id":9,"name":"William Martinez","username":"williammartinez","email":"williammartinez@example.com","address":"666 Cedar St"},
    {"id":10,"name":"Ashley Rodriguez","username":"ashleyrodriguez","email":"ashleyrodriguez@example.com","address":"777 Pine St"}
]

// printf ol /ul listed name.

// const ul = document.createElement('ul')

// arr.forEach(function(value,index,array){
//     const li = document.createElement('li')
//     li.innerText = value.name
//     ul.appendChild(li)
//     // body.appendChild(ul)
// })

// document.body.appendChild(ul)

// Create Table.
// const tab = document.getElementById('table')

// arr.forEach(function(value,index,array){
//     const tr = document.createElement('tr')
//     tab.appendChild(tr)
//     const td = document.createElement('td')
//     td.innerText = value.id
//     tr.appendChild(td)
//     const td1 = document.createElement('td')
//     td1.innerText = value.name
//     tr.appendChild(td1)
//     const td2 = document.createElement('td')
//     td2.innerText = value.email
//     tr.appendChild(td2)
// })


const tab = document.getElementById('tablet')
arr.forEach(function(value,index,array){
const tr = document.createElement('tr')
    tab.appendChild(tr)
    for(const key in value){
        const td = document.createElement('td')
        td.innerText = value[key]
        tr.appendChild(td)
    }
})