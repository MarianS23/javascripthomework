//homework 8
//task 1

let myStr = "hello what is your name";
let myStr1 = "Hello what is your name"

function checkWhatCase(str) {
	let regCheck = /^[A-Z]/
	let result = regCheck.test(str);
	if(result === true){
		console.log("String's starts with uppercase character");
	}else{
		console.log("String's not starts with uppercase character ")
	}
	
}
console.log(checkWhatCase(myStr1));
console.log(checkWhatCase(myStr));


//TASK 2

let userEmail = "user2SUPER@gmail.com"  //коректний емейл
let userEmail1 = "user2SUPERgmail.com"  //емейл без собачки
let userEmail2 = "user2SUPER@gmailcom"  //емейл без крапки
let userEmail3 = "user2SUPER@rambler.bot"  //теж коректний емейл

function checkEmail (email){
	let checker = /\w+@\w+\.\w{3}$/g;
	let result =checker.test(email);
	if(result == true){
		return result;
	} else{
		throw new Error("you enter invalid email")
	}
}

console.log(checkEmail(userEmail));   true
console.log(checkEmail(userEmail1));  false
console.log(checkEmail(userEmail2));  false
console.log(checkEmail(userEmail3));   true


//TASK 3                              так і не розібрався як то зробити
let str = "cdbBdbsbz" ; //

function checkStr (string){
   let regExp = /  /;
   return str.match(regExp);
};




//TASK 4
let str = "Java Script";
let first = str.replace("Script" ,"Java");
let second = first.replace("Java","Script");



//TASK 5 

let num = "9999-9999-9999-9999"
let num1 = "9999-9999-9999-9999-9999"
let num2 = "9999-9999232-9999-9999232"
let num3 = "9999-99999999-9999"

function checkBangId(number){
	let regExp = /^\d\d\d\d-\d\d\d\d-\d\d\d\d-\d\d\d\d$/
	if(regExp.test(number) == true){
		return "number confirmed";
	}else{
		return"you enter incorrect number ";
		
	}
}

console.log(checkBangId(num));
console.log(checkBangId(num1));
console.log(checkBangId(num2));
console.log(checkBangId(num3));



//TASK 6

function checkEmail(email){
	return /^_|^-/.test(email)?"your email can`t start with":
	       /\w+-\w+-/g.test(email)?"you enter too match hyphen":
	       /\w+|-@\w+\.\w{3}$/g.test(email)?"you enter correct email":"you enter incorrect email,enter something else";
};
console.log(checkEmail("sdf_sssef-af2312@gmail.com"));  // correct
console.log(checkEmail("-fsrijr34729HIUHIY@gmail.com"));
console.log(checkEmail("_sgsu34242-fsi@gmail.com"));
console.log(checkEmail("dfg-sdf-sdsf-@gmail.com"))
