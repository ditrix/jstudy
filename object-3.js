"use strict";

const person1 = {}
person1.name = 'dima'
person1.age = 48

const person2 = {
	name: 'alena',
	age: 44,
}

console.log(person1,person2)
console.log({person1,person2})

person1.email = 'ditrix2006@gmail.com'
console.log(person1)

delete person1.email
console.log(person1)

const person = {
	name: 'john',
	age_prop: 21,
	set age(value){this.age_prop = value},
	get age(){
		return this.age_prop
	},
}

console.log(person.age)
person.age = 24
console.log(person.age)
console.log(person)


for(const key in person1){
	const value = person1[key]
	console.log(key,value)
}


const fieldName = 'password'
const fieldValue ='userpass'

const fn = () => 'role'

const user = {
	name: 'anonimus',
	login: 'user',
	[fn()]: fieldValue
}

console.log(user)

