let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x , y , ,...z] = arr;

console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); 
Tom
Sam
['Bob']

_________________________________________________________________________________
TASK 2

let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let { names:[name1,name2,name3,name4],ages:[age1,age2,age3,age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

__________________________________________________________________________________
TASK 3
function mul(...rest){
	let result = 1;
	let isNumber;
	for(let i of rest){
		if(typeof i =="number"){
			result *=i;
			isNumber = true;
		}
	}
	return isNumber?result:0;
}
______________________________________________________________
TASK 4 
let sever = {
	data:0,
	convertToString:function(callback){
		callback(() =>	{
			return this.data +"";
		});
	}
};

let client = {
	server:server,
	result:"",
	calc:function(data) {
		this.server.data = data;
		this.server.convertToString(this.notification());
	},
	notification:function(){
		return (callback =>{
			this.result=callback();
		});
	}
};
