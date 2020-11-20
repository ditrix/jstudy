const hash = {
	frst: {value: 7},
	scnd: 10,
	thrd: '3',
	four: () => {return 4}
}


console.log(hash)
console.log('hash.four()',hash.four())
console.log('----------')
for(key in hash){
	console.log(key,typeof hash[key] ,hash[key])
}
console.log('----------forin')
const arr = [1,'10',12,'20']
arr.name = 'dmitry' 
arr.user = {login: 'ditrix'}

arr[4] = '44'
arr[1] = '21'
console.log(arr)
console.log(arr)

for(i in arr){
	console.log(i, typeof i, typeof arr[i], arr[i])
}

console.log('----------forEach')
arr.forEach( (item ) => {
	console.log(item)
})

arr2 = [10,1,2]
console.log(arr2)
console.log(arr2.filter(item => item < 10))
const fo = (value) => (2*value)
console.log(arr2.map(fo))
