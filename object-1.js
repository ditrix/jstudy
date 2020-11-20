const person = {
	login: 'ditrix',
	name: 'anonimus',
	age: 48
}


const obj = person
console.log(person)

obj.name = 'dmitry'
console.log(person)


const str = JSON.stringify(person)
const alex = JSON.parse(str)

console.log('--------1')
console.log(person)
console.log(alex)

console.log('-------')

alex.name = 'alex'
console.log(person)
console.log(alex)

console.log('-------')

const alena = {...person}
console.log(alena)
alena.name = 'alena'

console.log(person)
console.log(alex)
console.log(alena)

//////////////////////////////////////
const arr = ['a','b','c']
console.log(arr+'')
const strarr  =  JSON.stringify(arr)
console.log(strarr)