let t = 'outside'

function isT(){
	let t = 'inside'
	console.log(t)
	{
		let t = 'insite plus'
		console.log(t)
	}
	console.log(t)
}

isT()
console.log(t)