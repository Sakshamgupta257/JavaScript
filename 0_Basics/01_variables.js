//const is used to to declare constant variable(whose value cannot be changed)
const accountId = 144459

// there are two ways to declare variable: let , var
let accountEmail = "saksham@google.com"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
var accountPassword = "1234"


//if no value is assigned to a variable javascript stores undefined in it
let accountState;

//these is also a form declaration which is not good for declaration 
accountCity = "Jaipur"

// accountId = 2 // not allowed

// Used to print a line in log
console.log(accountId)

//Used to print values in form of table
console.table([accountId,accountCity,accountEmail,accountState])