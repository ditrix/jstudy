
const add = (a,b) => a + b

const createAdd = a => b => a + b

const add10 = createAdd(10)
const add20 = createAdd(20)

console.log(add10(100))

console.log(add20(200))


console.log('Ok')