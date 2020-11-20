let mess = 'mess 1'
const display = () => {
	console.log(mess)
}

mess = 'mess 2'

display()


const outFoo = () => {
	var outMess = 'inside message';
	return function(){
		console.log(outMess)
	}
}

var outMess = 'outside message';


const out = outFoo()


out()