// variables 
let variable = 'alteravel'
const constant = 'não é redeclaravel'

variavel = 1

//proibido redeclarar váriavel, constante
//constant = 2

// console
console.log(variable)
console.error(constant)
console.info('informação')
console.warn('var é depreciado')
console.table()
// tipos de dados
const lastName = 'Maia' //string 
let age = 17 // number
const person = {
    name: 'Luis',
    age: 18,
    gender: 'male'
} //objeto 

const fruits = ['Arroz', 'Frango', 'Banana', 'Uva'] //Array
console.table(fruits)

// Consumindo API (CAIU EM UMA PROMISSE)
fetch('https://viacep.com.br/ws/01001000/json/')
.then(res => res)
.then(data => console.log(data.json(data)))
.catch(error => console.error(error))
