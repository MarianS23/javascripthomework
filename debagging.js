//task 1
function calcRectangleArea(w,h){
	let s = (w*h)*0.5;
	return s;
}

let h = +prompt("enter height");
let w = +prompt("enter width");
if(isNaN(w)||isNaN(h)){
	alert("you enter not a Number")
}else {
	alert(calcRectangleArea(w,h))
};



//task 2
function getUserAge() {
	let age = prompt("enter your age");
	if(!age){
		alert("the field is empty,enter your age")
		throw new Error("the field is empty,enter your age")
	}else if(isNaN(age) || age ==='string'){
		alert("you enter not a number symbol in the field")
		throw new Error("you enter not a number symbol in the field")
	}else if(age<18){
		alert("to young for this")
		throw new Error("to young for this")
	}return alert("your age "+ age +"and you pass")
};

try{
 	getUserAge();
}catch(error){
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
}	
