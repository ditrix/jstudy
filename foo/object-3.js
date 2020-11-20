"use strict";

const hello = () => console.log('outside hello')
const voo = 222

const test = {
	voo: 123,
	display: function(){
		return this.voo
	},
	hello: () => console.log('inside hello'),
	sayHello: function(){
		this.hello()
	},
	displayOut: () => console.log(voo),
}

console.log(test.display())

//setTimeout(test.sayHello,1000)


test.sayHello()
console.log('ok')
/*
const person1 = {}
person1.name = 'dima'
person1.age = 48

person2 = {
	name: 'alena',
	age: 44,
}

console.log(person1,person2)
console.log({person1,person2})*/