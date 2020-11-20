function move(x,y){
	this.x = x
	this.y = y
}

function toString(){
	return `x = ${this.x}, y = ${this.y}`
}


move(10,12);
console.log(toString())



const pl1 = {x: 100, y: 200}

const move1 = move.bind(pl1)
const toString1 = toString.bind(pl1)
console.log(toString1())
console.log(toString())