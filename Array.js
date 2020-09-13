//1. Sum all the values in the array:(using reduce())

var num = [1, 2, 3, 4];
var sum = num.reduce((a, b) => a + b);
console.log(sum);

//2.  Remove duplicates from an array:(using from() &(...))

var fruits = ["banana", "watermelon", "apple", "orange", "apple", "watermelon"];
var uniQue = Array.from(new Set(fruits));
console.log(uniQue);

var names = ["Raj", "sagar", "doy", "meena", "sagar"];
var uniQue = [...new Set(names)];
console.log(uniQue);

//3. Replace the specific value in an array:

var names = ['john','day','rock', 'santho','ravi']
names.splice(1, 2, "included1",'includes2')
console.log(names)

//4.Map array without using .map():
var friends =[
    { name: 'sam', age: 22 },
    { name: 'john', age: 23 },
    { name: 'Mark', age: 24 },
    { name: 'Maria', age: 22 },
    { name: 'Monica', age: 21 },
    { name: 'Mari', age: 19 },
]
var allFriendNames = Array.from(friends, ({name})=>name)
console.log(allFriendNames)

//5.Empty an array:

var names = ['john','day','rock', 'santho','ravi']
names.length = 0
console.log(names)

//6. Converting Array to an object:

var fruIts = [ 'banana', 'watermelon', 'apple', 'orange' ]
var obj = {...fruIts}
console.log(obj)

//7.Fill an empty Array with some data:

let newArray = new Array(12).fill('1')
console.log(newArray)

//8. Merging Arrays using  spread operator(...):

var naMes = ['Apple','banana', 'orange']
var naMes2 = ['leaf','beef','chicken']
var naMes3 = ['sagar', 'raj','mon']
var nameS = [...naMes, ...naMes2, ...naMes3]
console.log(nameS)

//9.Checking the arrays with values that were presented in both arrays:(using filter) & spread operator(...)

var num1 = [2,4,7,1,5,9]
var num2 = [1,10,4,2,13,15,12]
var dubVal = [...new Set(num1)].filter(item =>num2.includes(item))
console.log(dubVal)

//10.To get random value form the array:

var fruits = ["banana", "watermelon", "apple", "orange", "apple", "watermelon"];
var randfruit = fruits[(Math.floor(Math.random()*(fruits.length)))]
console.log(randfruit)

//11. Reverse an Array:

var fruits = ["banana", "watermelon", "apple", "orange"];
var revFruits = fruits.reverse()
console.log(revFruits)

//12.Using lastIndexOf():

var nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
var lastIndex = nums.lastIndexOf(5);
console.log(lastIndex); 