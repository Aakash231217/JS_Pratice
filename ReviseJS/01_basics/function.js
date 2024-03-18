const { get } = require("http");

function sayMyName(){
    console.log("A");
    console.log("K");
}
sayMyName();
sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers("ab",6);

function loginUserMessage(username){
    return `${username}just logged in`
}

console.log(loginUserMessage("Aakash"));


function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,399,2434));

const users = {
    username:"aakash",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(users);
handleObject({
    username:"sam",
    price:399
})
const myNewArray = [200, 400, 100, 599];
function returnSecondValue(getArray){
      return getArray[3];
}
console.log(returnSecondValue(myNewArray));