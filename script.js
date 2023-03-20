// const heading = document.querySelector('h1');  //query selector for heading
// heading.innerText = " Hello Akrur"
// console.log(heading);
// const allLists = document.querySelectorAll('ul li')
// for (let i = 0; i < allLists.length; i++) {
//     const listItem = allLists[i];
//     listItem.innerText = "yes";
// }
// console.log(allLists);

const increment = document.querySelector('#increment');
let count = 0

function incrementCounter (){
    const counter1 = document.getElementById('count')
    count++
    counter1.innerText = count 
}

//attaching event listeners
increment.addEventListener('click', incrementCounter)