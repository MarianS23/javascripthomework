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


//task 3      ще доробляю!!

class Person{
	constructor(name,surname){
		this.name = name;
		this.surname = surname;	
	}
	showFullName(){
		//return this.name + " "+ this.surname  гірший варіант
		return `${this.name} ${this.surname}`
	}
}
