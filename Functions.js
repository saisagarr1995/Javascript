'use strict'
/*                           Functions                */

//1.Function Declaration:

//To create a function we can use a function declaration.
/*                          Example 1 */
function showMessage() {
    console.log("Hello functions...!")
}
showMessage()        //We should call the function outside the block.

/*                          Example 2*/

function showSecondMessage() {
    console.log("Hello Functions for two times...")
}
showSecondMessage();
showSecondMessage();
/**
 * The call showSecondMessage() executes the code of the function. Here we will see the message two times.
 * It shows the purposes of functions to avoid code duplication.
 */

 /*             Local Varianles            */

 //A function declared inside a function is only visible inside that function.

 function localFunction() {
     let message = "Hello, I'm Localvariable";
     console.log(message)
 }

 localFunction()
//  console.log(message)          /*This console.log() shows the ReferenceError*/

/*                      OuterVariables    */
//A function can access an outer variable as well:
//Example 1:
let username = 'Sagar';

function showOuter() {
    let message = 'Hello, ' + username;
    console.log(message)
}
showOuter();

//The function has full access to outer variable.It can modify it as well.
//Example 2:
let userName = "Sai";       // outer variable is only used if there is no local one.

function accessOuter() {
    userName = "Sai Sagar"           //It changed the Outer variable.
    let outerMessage = 'Hello ' + userName;
    console.log(outerMessage)
}
console.log(userName);      //Before calling the function the outer variable will be "sai"

accessOuter();

console.log(userName);      //After calling the function if we log the value it will be the updated one which is present in side the local.

//Example 3:

let newUser = 'Raj';            //It is a global variable,which is declared outside the function
//Global variables are visible from any function (unless shadowed by locals).

function showrajmessage() {
    let newUser = "Bob";                // declared as local variable

    let rajmessage = 'Hello, ' + newUser;
    console.log(rajmessage)
}
showrajmessage();            // It uses the local username

console.log(newUser)


/*                          Parameters                   */

//We can pass arbitrary data to functions using parameters.it is also called as function arguments.
//Example 1:
function parametersMessage(from, test) {     //from and test are two parameters
    console.log(from + ':' + test)
}
parametersMessage('Sagar',"What's up?")

//Example 2:
//*(When the parameter is not defined then its value is "undefined" )
function decpar(data, testtwo) {
    data = '*' + data +'*';
    console.log(data + ':' +testtwo) 
}

let data = 'Ram'

decpar(data, "Hello")

console.log(data)

/*                  Returning a value               */

function returnSumVal(a, b) {
    return a + b
}
let result = returnSumVal(2, 2)

console.log(result)

//If a function does not return a value then it is  "undefined"
// an empty return is also shown as "undefined"

//A function should do exactly what is suggested by its name, no more.

