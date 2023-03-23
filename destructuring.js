//for array
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6]

const arr3 =[...arr1, ...arr2]
console.log(arr3)

// for object
const obj1 ={
    name: 'Akrur'
}

const obj2 = {
    surname: 'Neupane'
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3)

