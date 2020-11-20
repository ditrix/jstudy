class Point{
	constructor(x,y){
		this.x = x
		this.y = y
	}
	move(x,y){
		this.x += x
		this.y += y
	}
}

const point = new Point(12,1)
console.log(point)
point.move(10,-2)
console.log(point)
console.log('----------')
console.log(Point.prototype)
console.log(Point.constructor.prototype)
console.log(Point.prototype.move.prototype)