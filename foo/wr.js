const x = 'outside'

const foo = () => {
	const x = 'inside'
	console.log(this.x)
}	

foo()

console.log(x)