//array.from()
/*console.log(Array.from("sorry"));

console.log(Array.from([12,11,10],x=>x*x));

//Array.concat()
const array=["S","H","U","B","H","A","S","I","S"];
const array1=["P","A","D","H","I"];
const concatenation= array.concat(array1) 
console.log(concatenation)

//Array.filter()//Array.indexof()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction elite', 'present'];
const result = words.filter(word => word.includes("elite"));
console.log(result);

console.log(words.indexOf('elite'));
console.log(words.indexOf('elite', 2));
console.log(words.indexOf('giraffe'));

//Array.find()
const array1 = [5, 130, 12, 8, 44];
const found = array1.find(element => element > 10);
console.log(found);

//Array.findindex()
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 5;
console.log(array1.findIndex(isLargeNumber));

//Array.join()
const elements = ["Fire", "Air", "Water","Cloud","Rain"];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

//Array.keys()
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

//Array.map()
const array1 = [1, 4, 9, 16, 21, 12];
const map1 = array1.map(x => x * x);
console.log(map1);

//Array.push() //Array.pop()
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
animals.push('chickens', 'cats', 'dogs');
console.log(count);
console.log(animals);

animals.pop()
console.log(animals);*/

//Array.shift()
const array1 = [1, 2, 3, 4, 5, 6];
const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);

//Array.slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2,-1));
console.log(animals.slice(1, 5));

//Array.sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1)