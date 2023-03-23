const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number multiplied by 2
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



const arr = [ 2, 4, 6, 8, 10 ]; 

const mulArr = arr.map((arr) => {
    return arr *2 
})
console.log(mulArr)


// using fliter

const fliterArr = arr.filter((arr) => {
    return arr > 6
})

console.log(fliterArr)


// using filter to filter the age in object
 
const nameF = [
    {
        name: 'Akrur',
        age: 21
},
{
    name: 'Aashish',
    age: 16
}, 
{
    name: 'Roshan',
    age: 25
}
]


const VotingName = nameF.filter((name)=>{
    return name.age > 18
})

console.log(VotingName)


// .forEach method

nameF.forEach((nameB) => {
    console.log(nameB); 
});

// .find 

const findAkr = nameF.find((nameA)=>{
    return nameA.name === 'Akrur'
  })
  
  console.log(findAkr)