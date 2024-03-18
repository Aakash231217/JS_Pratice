 let myDate = new Date();
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 

 let myCreatedDate = new Date(2023, 9 ,23,4,5);
 console.log(myCreatedDate.toDateString());


 let myTimeStamp = Date.now();
 console.log(myTimeStamp);

newDate.toLocaleString('default',{
    weekday:"long",
})