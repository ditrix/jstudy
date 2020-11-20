function Point(x,y){
	this.x = x;
	this.y = y;	
}

Point.prototype.move = function(x,y){
	this.x += x;
	this.y += y;
}

const point = new Point(1,2) 
point.move(10,-10)
console.log(point)