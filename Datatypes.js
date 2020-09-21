                        /*Data types*/

/*A value in javascript is always a certain type.
 There are 8 basic data types in javascript:
        1.Number
        2.Bigint
        3.string
        4.Boolean
        5.Null
        6.Undefined
        7.Object
        8.Symbol
The "typeof" operator allows us to see which type is stored in a varable.*/

// We can put any type in a variable.
//javascript are "Dynamically typed". i.e.,there exist data types, but variables are not bounded to any of them.
let message = "Hello";
message = 1234
console.log(message)

//1. Number:numbers of any kind: integer or floating-point, integers are limited by ±(253-1)
//NaN- represents a computational error.
//Infinity -It is a special value that’s greater than any number. we can get it as a result of division by zero.
let num = 123;
num = 12.432
console.log(num)

//2. BigInt: A BigInt value is created by appending n to the end of an integer:
const bigInt = 12316262781271286172632653623721726172172617621621n;
console.log(bigInt)

//3.String: A string in javascript is surrounded by a quotes.

let string = "My name is god";
let stringTwo = "God is every where";
let phrase = `You mentioned a false statement:${string}`

console.log(phrase)


/*There are 3 types og quotes in javascript:
    1.Double quotes:"Sai"
    2.Single quotes:'Sai'
    3.Backticks:`sai`
    
        Double&single : Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
        Backticks : Allow us to embed variables and expressions into a string by wrapping them in ${…}*/ 

let name = "Raj"

console.log(`Hello ${name}`)

//4. Boolean: Boolean has only 2 values "True" and "false".

let namefieldChar = true;
let charfield = false;
console.log(charfield, namefieldChar)

/*boolean values also come as a result of comparisons*/

let Grater = 4 > 1
console.log(Grater)


//5. Null: The special null value does not belong to any of the types described above.

let age = null;   //age is unknown 
console.log(age)
console.log(typeof age) // object
//null :In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// 6. Undefined: The meaning of undefined is “value is not assigned”.
//If a variable is declared, but not assigned, then its value is undefined:

let Name;          //undefined
console.log(Name)

let undefinedAge  = 24;
undefinedAge = undefined

console.log(undefinedAge)
        /*  we uses null to assign an "empty" or "unknown" value to a variable, while undefined is reserved as a default initial value for unassigned things. */

//7.Object & Symbol: Object type is specal.
        //All object types are called "primitive" because there values can contain only a single thing
 //The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

 /*
 To check the data type we use "typeof"

 typeof a  (or) typeof(a)

 ***For null returns "object" – this is an error in the language, it’s not actually an object.***
 */
