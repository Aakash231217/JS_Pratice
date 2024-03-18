const score = 400;
console.log(score);
const balance = new Number(100.84354);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log(balance.toPrecision(2));

const hundreds = 100000;
console.log(hundreds.toLocaleString());


//-------------------MATHS------------------
console.log(Math.abs(-5));
console.log(Math.round(34.52));
console.log(Math.ceil(4.3));
console.log(Math.floor(3.9));
console.log(Math.min(3,2,2,45,65,1));
console.log(Math.random()*10+1);


const min = 10;
const max = 20;
console.log(Math.random()*(max-min+1)+min);