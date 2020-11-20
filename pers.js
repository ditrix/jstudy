function Person(name, age, login) {
	this.name = name
	this.age = age
	this.login = login
}

const user = new Person('dmitry',48,'ditrix')
console.log(user)
console.log(user.valueOf())
console.log(Object.prototype)

class User {
	constructor(name,age){
	this.name = name
	this.age = age
	this._login = ''
	}

	set login(_login) {
		this._login = _login
	}

	get login(){
		return this._login
	}
} 

const admin = new User('dmitry',48)

console.log(admin)

admin.login = 'admin'
console.log(admin.login)
