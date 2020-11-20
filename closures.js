const closures = () => {
	const data = {};
	let counter = 0;
	return (key, value) => {
		data[key] = value
		return data;
	} 
}

const foo = closures()

console.log(foo('name','dima'))
console.log(foo('age','48'))