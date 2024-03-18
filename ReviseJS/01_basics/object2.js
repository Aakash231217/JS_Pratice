const { Cipher } = require("crypto");

const tinderUser = {}; //non singleton

//const tinderUser = new Object (); //singleton

tinderUser.id = "123abc";
tinderUser.name = "Aakash";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aakash",
            lastName:"Singh",
        }
    }
}

console.log(regularUser.fullname?.userfullname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"A", 5:"e"}


const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id:1,
        email:"aak@gmail.com"
    },{
        id:2,
        email:"jhand@gmail.com"
    }
]
console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Aakash"
}
const {courseInstructor:instructor} = course;
console.log(instructor);