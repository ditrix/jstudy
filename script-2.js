/*

axios()
	.then()
	.catch()

*/

const getData = (url = 'localhost') => ({
	data:'123',
	url: url,
	error: false,
	then(){
		return 123
	},

})



const makeData = (_b = false) => ({
	error: false,
	b: _b,
	result: '',
	then(){
			console.log('is then')
				this.result = 'then'
				return this
		},
	catch(){
			console.log('is catch')
				this.result = 'catch'
				return this
		}
})

//console.log(getData().then())
//console.log(makeData(0).then())

const result = makeData(1).then().catch().then().result
console.log(result)


class Person {
	constructor(_name = 'noname'){
		this.name = _name

	}
	printIt(){
		console.log(this.name)
		return this
	}
	getClass(_name){
		this.name = _name
		return this
	}
}

const person = new Person().printIt().getClass('dmitry').printIt()

const дима = 'волошин'
console.log(дима)

const obj1 = {field:1}
const obj2 = obj1
obj2.field = 2
console.log(obj1)