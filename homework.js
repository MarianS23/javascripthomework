//task 2 
let n = "maryan";
alert(n);


//task 3
let first = "first1";
let second = "second2";
first = second;
alert(first);
alert(second);



//task 4
let object = {
	"string": "це строка",
	"number": 2,
	"boolean":"true",
	"undefined":undefined,
	"null":null
};


//task 5
let isAdult = confirm("чи досягли Ви повноліття");
console.log(isAdult);


//task 6
let myName = "Maryan";
let mySurname = "shutov";
let numberOfMyStudyGroup = 2;
let myBirthday = "01.01.1996";
let isMarried = true;

let myNameType = typeof myName;
let mySurnameType = typeof mySurname;
let numberOfMyStudyGroupType = typeof numberOfMyStudyGroup;
let myBirthdayType = typeof myBirthday;
let isMarriedType = typeof isMarried;

console.log(numberOfMyStudyGroup,isMarried,myName,mySurname,myBirthday,);

let isNull = null;
let isUndefined;
console.log(typeof isNull,typeof isUndefined);

//task 7
let userLogin = prompt("ваш логін");
let userEmail = prompt("ваш email");
let userPassword = prompt("ваш пароль");
alert("Ваш логін "+userLogin+" Ваш емейл "+userEmail+" Ваш пароль "+userPassword);*/


//task 8

let secondsInMinute = 60;
let minutesInHour = 60;
let hourInDay = 24;
let daysInMonth = 30;
let secondsInHour = secondsInMinute * minutesInHour;//секунд в годині
let secondsInDay = secondsInHour * hourInDay;//секунд в добі
let secondsInMonth =secondsInDay * daysInMonth;//секунд у місяці
alert("секунд в годині "+secondsInHour+",секунд у добі "+secondsInDay+",секунд в місяці "+secondsInMonth);
