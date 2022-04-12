//task 1
function propsCount(currentObject){
	let myArray = Object.values(currentObject);
	return myArray.length;
}


//task 2
function CreatesObject(first,second,third,fourth,fifth){
         this.first = first;
         this.second = second;
         this.third = third;
         this.fourth = fourth;
         this.fifth = fifth;
};


let myObj = new CreatesObject(1,2,3,4,5);


function showProps(obj){
	let myArray = Object.entries(obj);
	return myArray;
};
console.log(showProps(myObj));


//task 3     

class Person{
	constructor(name,surname){
		this.name = name;
		this.surname = surname;	
	}
	showFullName(){
		return `${this.name} ${this.surname}`
	}
}

class Student extends Person {
	constructor(name,surname,year){
		super(name,surname)
		this.year = year;
	}
	showFullName(midleName){
		return super.showFullName() +" "+midleName;

	}
	showCours(){
		let currentYear = new Date().getFullYear();
		let result = currentYear - this.year;
		if(result >6){
			alert("you are not student anymore")
			return;
		}else {
		    return result;
	    }
	}
};
