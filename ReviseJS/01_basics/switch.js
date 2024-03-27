const month = 2;
switch(month){
    case 1:
        console.log("Jan");
    case 2:
        console.log("Fev");
    case 3:
        console.log("Mar");
    default:
        console.log("No match")
}

//falsy - 0, -0, BigInt, "", null, undefined, Nan
//truthy - "0", 'false', " ", [],{}, function(){}
const userEmail = "aaks"
if(userEmail.length ===0){
    console.log("Array is empty");
}

const emptyObj= {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}