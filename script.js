const object = function(arg = 0) {
	this.name= 'somename'
	math = {
		add: function(a){ return a + arg},
		inc(a) { a++; return a;},
	}
	return math
}

console.log(object(100).add(1))
console.log(object().inc(19))


const add = function(a = 10){
	function inside(b = 20){
		return a + b
	}
	return inside
}  
console.log(add(2)(10))