'use strict';
const obj = {
	first: 2,
	second: 33,
	third: 'aas',
}

for(const key in obj){
	const value = obj[key]
	console.log(key,'  ', typeof key, ' ', value, typeof value)
}