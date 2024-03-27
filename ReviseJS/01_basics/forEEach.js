const coding = ["js","ruby","java","python","cpp"];
coding.forEach(function(val){
   console.log(val);
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);

})

const myCoding  = [
    {
        languageName:"javascript",
        languagefile:"js",
    },
    {
        languageName:"cpp",
        languagefile:"c++"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
}

)

const myNums = [1,3,4,5,6,7];
const hello = myNums.filter((num)=>{return num>5})
console.log(hello);

