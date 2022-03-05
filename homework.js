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




lesson 2





let x = 1;
let y = 2;

let res1 = String(x)+y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x)+String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x) || Boolean(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseFloat(y.x);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

//tasl 2 
let n = prompt("введіть число");
   console.log(n >= 0 && n % 7 == 0 && n % 2 == 0 ? "true":"false");

//task 3
let emptyArr =[];
emptyArr[0] = 12;
emptyArr[1] = "any string";
emptyArr[2] = true;
emptyArr[3] = null;
document.write(emptyArr.length + " number of elements" + "</br>");
emptyArr[4] = prompt("enter anything");
document.write(emptyArr[4] + " this is the fifth element of the array");
console.log(emptyArr.shift());


//task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
let newCities = cities.join("*");
console.log(newCities);


//task 5
let isAdult = prompt("how old are you?");
 if (isAdult >= 18){
 	alert("you reached adulthood");
 } else{
 	alert("your not old enough");
 };*/






 //task 6
 // перший крок запит користувача рандомних чисел
 let s1 = Number(prompt("enter side 1 of triangle"));  
 let s2 = Number(prompt("enter side 2 of triangle"));
 let s3 = Number(prompt("enter side 3 of triangle"));
  

//другий крок перевірка на правильність введених чисел
alert(s1 + s2 > s3 && s1 + s3 >s2 && s3 + s2 > s1 ? "трикутник існує":"Incorrect data"); 

//третій крок перевірка чи трикутник прямокутний
let a =Math.sqrt(s1**2 + s2**2 == s3**2 || s2**2 + s3**2 == s1**2 || s3**2 + s1**2 == s2**2) ;
alert(a ? "трикутник прямокутний":"трикутник не прямокутний");


//четвертий крок обрахунок площі трикутника
let area = (s1 + s2 + s3)/2;
let areaS = Math.sqrt(area*(area-s1)*(area-s2)*(area-s3));
areaS = areaS.toFixed(3);
alert(areaS);                 










//task 7
let currDate = new Date();
let dayTime = currDate.getHours();


if (dayTime >=23 && dayTime <5){
   alert("доброї ночі");
} else if (dayTime >=5 && dayTime<11){
	alert("доброго ранку");
} else if(dayTime >=11 && dayTime < 17){
	alert("доброго дня");
} else{
	alert("доброго вечора");
}


switch (true){                       
	case dayTime >=23 || dayTime<5:    
	console.log("доброї ночі");
	break;
	case dayTime >=5 || dayTime<11:
	console.log("доброго ранку");
	break;
	case dayTime >=11 || dayTime<17:
	console.log("доброго дня");
	break;
	case dayTime >=17 || dayTime<23:
	console.log("доброго вечора");
	break;
	default:
	console.log("ніт");
}












