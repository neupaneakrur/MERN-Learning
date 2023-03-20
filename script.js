const heading = document.querySelector('h1'); 
heading.innerText = " Hello Akrur"
console.log(heading);
const allLists = document.querySelectorAll('ul li')
for (let i = 0; i < allLists.length; i++) {
    const listItem = allLists[i];
    listItem.innerText = "yes";
}
console.log(allLists);