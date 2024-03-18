"use Strict"; //Treat all JS code as newer version
//alert(3+3); we are using nodejs not browser
console.log(2+3);

let name = "aakash";
let age = 21;
let isLoggedin = false;
//number - 2 to power 53
//bigInt 
//string => ""
//boolean=> true or false
//null => standalone value
//undefined
//symbol

console.log(typeof null);//->object
console.log(typeof undefined);

//Primitive(stack)
//7 types: String, Number, Boolean, null

//Reference -(Non primitive)(heap)
//Array Objects


//memories-> stack, heap
let myName = "AakashSingh";
let anotherName = myName;
anotherName = "chai aur code";
console.log(anotherName);
console.log(myName);

let user = {
    email:"user@google.com",
    upi:"user@ybl"
}