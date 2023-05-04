const people = [
  { id: 1, first_name: "Meridel", last_name: "Giannini", email: "mgiannini0@msn.com", gender: "Female", age: 25 },
  { id: 2, first_name: "Ugo", last_name: "Szepe", email: "uszepe1@wiley.com", gender: "Male", age: 17 },
  { id: 3, first_name: "Osgood", last_name: "Duplain", email: "oduplain2@wunderground.com", gender: "Male", age: 48 },
  { id: 4, first_name: "Eve", last_name: "Greene", email: "egreene3@geocities.jp", gender: "Female", age: 35 },
  { id: 5, first_name: "Lenka", last_name: "Double", email: "ldouble4@usa.gov", gender: "Female", age: 60 }
]

// ESCREVA O NOME E GENERO DE CADA PESSOA DO ARRAY PEOPLE

// console.log('----------- For OF --------------')
// for (const person of people) {
//   console.log(`Nome: ${person.first_name} | Genero: ${person.gender}`)
// }

// console.log('----------- For --------------')

// for (let i = 0; i < people.length; i++) {
//   console.log(`Nome: ${people[i].first_name} | Genero: ${people[i].gender}`)
// }

// console.log('----------- Foreach --------------')

// people.forEach(pessoa => console.log(`Nome: ${pessoa.first_name} | Genero: ${pessoa.gender}`))

// GUARDE EM UMA VARIAVEL SOMENTE AS PESSOAS COM GENERO === FEMALE

// console.log('----------- For OF --------------')
// const arrayOne = []
// for (const person of people) {
//   if (person.gender === 'Female') {
//     arrayOne.push(person)
//   }
// }

// console.log(arrayOne)

// console.log('----------- For --------------')

// const arrayTwo = []

// for (let i = 0; i < people.length; i++) {
//   if (people[i].gender === 'Female') {
//     arrayTwo.push(people[i])
//   }
// }

// console.log(arrayTwo)

// console.log('----------- Filter --------------')

// const arrayThree = people.filter(person => person.gender === 'Female')
// const arrayThree = people.filter((person) => person.gender === 'Female')
// const arrayThree = people.filter(function (person) { return person.gender === 'Female' })

// console.log(arrayThree)

// ARMAZENE EM UMA VARIAVEL A PRIMEIRA PESSOA QUE TIVER MAIS QUE 45 ANOS

console.log('----------- For OF --------------')
let personOne;
for (const person of people) {
  if (person.age > 45) {
    personOne = person
    break
  }
}

console.log(personOne)

console.log('----------- For --------------')

let personTwo;
for (let i = 0; i < people.length; i++) {
  if (people[i].age > 45) {
    personTwo = people[i]
    break
  }
}

console.log(personTwo)

console.log('----------- FIND --------------')

const personThree = people.find(person => person.age > 45)

console.log(personThree)


// ORDENE O ARRAY CONSIDERANDO A IDADE CRESCENTE

// // console.log(`1`, people)

// people.sort((pessoaA, pessoaB) => {
//   console.log(people)
//   console.log(`${pessoaA.first_name}, ${pessoaA.age} - ${pessoaB.first_name}, ${pessoaB.age}`)
//   if (pessoaA.age > pessoaB.age) {
//     return 1
//   }

//   if (pessoaA.age < pessoaB.age) return -1

//   return 0
// })

// console.log(`2`, people)





