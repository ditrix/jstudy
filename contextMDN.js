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
