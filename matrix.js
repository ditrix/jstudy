const matrix =[
[55,10,11,21],
[31,44,31,6],
[1,10,31,6],
]

//console.log(matrix)
for(const i in matrix){
	const row = matrix[i]
	for(const j in row){
		const col = row[j]
		console.log(i, j, col)
	}		
}

for(const i in matrix){
	for(const j in matrix[i]){
		console.log(i, j, row[j])
	}		
}