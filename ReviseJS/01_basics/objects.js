//agr constructor se bnega toh singleton pattern hoga
//Object.create
//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Aakash",
    age:18,
    [mySym]:"myKey1",
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
};
console.log(jsUser.email);
console.log(jsUser["email"])
console.log(typeof jsUser.mySym);
console.log( jsUser[mySym]);

jsUser.greeting = function(){
    console.log("HEllo Js");
}
console.log(jsUser.greeting());