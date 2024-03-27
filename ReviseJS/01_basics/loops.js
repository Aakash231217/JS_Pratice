let myArray = ["flash","batman","superman"]
console.log(myArray.length)
for(let index = 0;index<myArray.length;index++){
    const element  = myArray[index];
    console.log(element);
}
//break and continue
for(let index = 0;index <=20;index++){
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);

}
let score = 1;
do{
  console.log(`score is ${score}`)
  score++;
}while(score <= 10);