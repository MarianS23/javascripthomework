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


//TASK 4

const workersList = [];

class Worker{
	#experience = 1.2;
	constructor(fullName,dayRate,workingDays){
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
		workersList.push(this);
	}
    showSalary(){
    	let salary = this.dayRate * this.workingDays;
    	console.log(this.fullName + ": "+ salary)
    }
    
    showSalaryWithExperience(){
    	let salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    	console.log(this.fullName + ": "+ salaryWithExp)
    }

    salary(){
    	return this.dayRate * this.workingDays *this.#experience
    }

    get experience() {return this.#experience };
    set experience(changedExp){return this.#experience = changedExp;}

    sortSalary(workersArrey){
    	let sorted = workersArrey.sort(function sort(a,b) {
    		return a.salary() - b.salary();
    	})
    	for(let i = 0;i<sorted.length;i++){
    		console.log(sorted[i].fullName +": "+sorted[i].salary())
    	}
    }
    

}

let newWorker = new Worker("John Johnson",11,24);
newWorker.showSalary();                  //John Johnson: 264
newWorker.experience;                    //1.2
newWorker.showSalaryWithExperience();    //John Johnson: 316.8
newWorker.experience = 1.5;              //1.5
newWorker.showSalaryWithExperience();    //John Johnson: 396
newWorker.sortSalary(workersList);       //Tom Tompson: 343.2
                                         //Oleg Olegiv: 384
                                         //John Johnson: 396
          
   
let newWorker1 = new Worker("Tom Tompson",11,26);
newWorker1.showSalary();                  
newWorker1.experience;                    
newWorker1.showSalaryWithExperience();   
newWorker1.experience = 1.5;            
newWorker1.showSalaryWithExperience();    
newWorker1.sortSalary(workersList);       
                                         
                                         
let newWorker2 = new Worker("Oleg Olegiv",16,20);
newWorker2.showSalary();                  
newWorker2.experience;                    
newWorker2.showSalaryWithExperience();   
newWorker2.experience = 1.5;            
newWorker2.showSalaryWithExperience();    
newWorker2.sortSalary(workersList);

let newWorker3 = new Worker("Stepan Step",20,26);
