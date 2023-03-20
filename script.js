// const heading = document.querySelector('h1');  //query selector for heading
// heading.innerText = " Hello Akrur"
// console.log(heading);
// const allLists = document.querySelectorAll('ul li')
// for (let i = 0; i < allLists.length; i++) {
//     const listItem = allLists[i];
//     listItem.innerText = "yes";
// }
// console.log(allLists);

const increment = document.querySelector('#increment')
const decrement = document.querySelector('#decrement')
const ulElement = document.getElementById('list-items')
const counter1 = document.querySelector('#counter')
let count = 0

function incrementCounter (){
    const counter1 = document.getElementById('count')
    count++
    counter1.innerText = count 

    //creating an element
    const li = document.createElement('li');
    const textNode = document.createTextNode('Senetence'+ count)
    li.appendChild(textNode)

    //append the element
    ulElement.appendChild(li)
}

function decrementCounter (){
    const counter1 = document.getElementById('count')
    count--
    counter1.innerText = count 

}

//attaching event listeners
increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)