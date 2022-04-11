//TASK 1
function calcRectangleArea(w,h){
      if(isNaN(w)||isNaN(h)){
	     alert("you enter NaN")
	     throw new Error("user enter NaN")
      }else {
	     return (w*h)*0.5;
      };
};

let w = +prompt("enter width");
let h = +prompt("enter height");
    try{
          calcRectangleArea(w,h)
    }catch(error){
          console.log(error.name);
	  console.log(error.message);
	  console.log(error.stack);
};  




//TASK 2
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


//TASK 3
class MonthException {
	constructor(message){
		this.message = message;
		this.name = 'MonthException';
	}
}

function showMonthName(month) {
	month = month - 1;
    let months = ["jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    if(months[month] !== undefined){
    	return months[month];
    }else {
    	throw new MonthException("inccorect month number");
    }
}

try{
	let userChoise = 6;
	let monthName = showMonthName(userChoise);
	console.log(monthName);
}catch(error){
	console.log(error.name,error.message);
}






//TASK 4 
function showUser(id){
	if(id<0){
		throw new Error(`you enter inccorect number ${id}`)
	}
	return {id:id};
}




function showUsers(ids) {
	let result = [];
	for(let i = 0;i<ids.length;i++){
	     try{
		showUser(ids[i])                              
                result.push(showUser(ids[i]))                
	     }catch(error){
	  	console.log(error.message);
	     }
	}
	  return result;
}



function showUsers(ids){
	let result =[];
	ids.forEach(function(id){
		try{
			let person = showUser(id);
			result.push(person);
			}catch(error){
				console.log(error.message)
			}
	})
	return result
}
