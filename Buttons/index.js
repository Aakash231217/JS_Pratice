function formsubmit(){
    const name = document.getElementById("nameInput");
    const enteredName = name.value.trim();
    if(enteredName !== "")alert(enteredName);
    else alert("Sorry!");
}