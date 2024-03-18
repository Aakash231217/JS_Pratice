//immediately invoked function expression 

(function chai(){
    console.log("DB Connected");
})();

((name)=>{
    console.log(`DB Connected ${name}`)
})('aakash')

//three types of function exectuion context
// function , global, eval