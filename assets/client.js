
const validInputRegExPattern = /^(?=.*[0-9A-Za-z])[0-9A-Za-z]+$/;
let button = document.getElementById("submit-button");
button.disabled = true;
let input = document.getElementById("input-field");
input.addEventListener("keyup", function() {
    let inputVal = input.value;
    if(inputVal.length > 0 && inputVal.length < 11 && validInputRegExPattern.test(inputVal)){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
});