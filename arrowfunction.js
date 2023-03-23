// old method of declaring function
function Akrur (){

}

//arrow function
// cannot initialize arrow functions without decleration
const Neupane = () =>{
return 1
}
console.log(Neupane())


const Neupane2 = (arg, arg2) => {
    return arg + arg2 
  }
  console.log(Neupane2(100, 200))

//adding button event by using arrow function 
  const btn = document.getElementById('btn') 

  btn.addEventListener('click', () =>{
    console.log('Clicked')
  }
  )
