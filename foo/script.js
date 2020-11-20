
console.log('ok')

// чистые ф-ции один рез-т на один один арг

// замыкания - аналги св-в из ООП
function outside(){  // ф-я хранитель
	// outside хранит состояние 
	let state
	function inside(){  // ф-я обработчик
       // вызывается
	} 
}

let str = ''
function f(){
	let fcontext = ''
	console.log('from f ',fcontext)
	function g(z){
		fcontext = 'from g' + z
		console.log(fcontext)
	}
	return g
}
const s = f()



//console.log(str)

/*
внутренней функции доступны свои аргументы 
и контекст внешней

если внрешняя возвращает внутренюю


*/