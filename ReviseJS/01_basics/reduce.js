const myNums = [1,2,3];
const myTotal = myNums.reduce(function(acc,currVal){
   console.log(`acc: ${acc} and currVal ${currVal}`)
    return acc + currVal
},3)

const myTotals = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotals);