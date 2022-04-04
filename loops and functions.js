//task1 
let nArrey = [2,3,4,5];
let product = 1;

for(let i = 0;i<nArrey.length;i++){
    product *= nArrey[i];
};
console.log(product);



let nArrey = [2,3,4,5];
let product = 1;
let i = 0;

while(i<nArrey.length){
	product *= nArrey[i];
	i++;
}
console.log(product);



//tasl 2 
for(let i = 0;i<=15;i++){
	if(i % 2==0){
		console.log(i +" is odd");
	}else{
		console.log(i +" is even");
	};
	
};



//task 3
function randArray(k){
	let myArray = [];
	for(let i= 0;i<k;i++){
		myArray[i]=Math.floor(Math.random()*500)+1;
	};
	return myArray;
};



//task 4 
function raiseToDegree(a,b){
	let result = a;
	for(let i = 1;i<b;i++){
		result *= a;
	};
	return result;
};

let a = +prompt("enter number");
let b = +prompt("enter degree");
if(Number.isInteger(a) && Number.isInteger(b)){
	alert(raiseToDegree(a,b));
}else{
        alert("you enter incorrect data");
	};
        
//task 5
function findMin(){
	let minNum = arguments[0];
	for(let i = 1;i<arguments.length;i++){
		if(arguments[i] <minNum){
			minNum= arguments[i];
		};
	};return minNum;
};

//task 6
function findUniq(arr){
	for(let i = 0;i<arr.length;i++){
		for(let j = (i + 1);j<arr.length;j++){
			if(arr[i]===arr[j]){
				return false;
			}
		}
	}
};

//task 7
function showLastElem(arr,lastElem){
	return (lastElem == null)?arr.pop():arr.slice(-lastElem);
};

//task 8
function changeFirsLetter (str){
	let array = str.slice(" ");
	let newArray = [];
	 for(let i = 0;array.length;i++){
		newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
	 };
	return newArray.join(" ")
};
