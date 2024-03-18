myarr = [2,1,4,5,6];
myarr.unshift(9);

console.log(myarr);
myarr.shift();
console.log(myarr)

//slice-> no changes in the old array , splice -> even the old array changes
console.log("A", myarr);
const myArr1 = myarr.slice(1,3);

console.log(myArr1);
console.log("B",myarr);

const myArr2 = myarr.splice(1,4);
console.log("C",myarr);
console.log(myArr2);


const marvel = ["thor","IronMan","Spiderman"];
const dc_heroes = ["superman","flash","batman"];
//marvel.push(dc_heroes);
//console.log(marvel);
//console.log(marvel[3]);
const all_heroes = marvel.concat(dc_heroes);
console.log(all_heroes);

const all_new_heroes = [...marvel, ...dc_heroes];
console.log(all_new_heroes);