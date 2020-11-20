 'use strict';

/*const INTERVAL = 500;
const MAX_VALUE = 10;


let counter = 0;
let interval = null;

let timer = () => {
	if(counter === MAX_VALUE){
		clearInterval(interval);
		console.log('end')
		return;
	}
	console.dir({counter, date: new Date()})
	counter++;
}

interval = setInterval(timer,INTERVAL)*/
const addNum = (a, b) => a + b;
console.log(addNum( 5.1, 2.3));


const welcome = person => {
	console.log(`Ave ${person.name}!`)
}

//welcome({name: 'dmitry'})

/*let alena = {
	name: 'alena'
}

welcome(alena);
*/

const persons = {
	dima: {name: 'Dima'},
	alena: {name: 'Alena'},
	alex: {name: 'Alex'},
};

for(const name in persons){
	const person = persons[name]
	welcome(person);
}