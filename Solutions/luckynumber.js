const database = 
[
	{
		username: "Bobby",
		password: "secretpassword"
	},

	{	
		username: "Johnas",
		password: "secretpassword2",
	},

	{
		username: "Martha",
		password: "secretpassword3",
	},

]
let userPrompt = prompt("what's your username?")
let passwordPrompt = prompt("what's you password?")


const ifUserIsValid = (user,pw) => {
	for (i=0;i<database.length;i++) {
		if (database[i].username === user &&
		 	database[i].password === pw) {
			return true
		}
	}
	return false
} 


const logIn = (user,pw) => {
	if (ifUserIsValid(user,pw)) {
		alert(luckyNumber)
		alert((Math.round(Math.random() * 10)))
	} else {
		alert("Sorry,wrong username or password")
	}
}
let luckyNumber = `Hi ${userPrompt}! Your lucky number for today is:`

logIn(userPrompt,passwordPrompt)
