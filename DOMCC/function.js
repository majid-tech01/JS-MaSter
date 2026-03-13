
function addlanguage(langname){
    const li = document.createElement('li');
    li.innerHTML = `${langname}`
    document.querySelector('.language').appendChild(li)

}
addlanguage("python");
addlanguage("c++");