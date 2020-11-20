const Context = function(){
	this.name = 'alena';
	const city = {
		name: 'kramatorsk',
		f1(){
			return this.name;
		},
		f2: () => {
			return this.name;	
		},
		f3: function(){
			return this.name
		},
	}
	return city
}

const context = new Context();
console.log(context.f1())
console.log(context.f2())
console.log(context.f3())