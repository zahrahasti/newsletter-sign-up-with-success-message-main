"use strict";


const inputEmail=document.getElementById("email");
const btnSubmit=document.querySelector(".btn-submit")
const errorText=document.querySelector(".text-error")
let timed;
function is_valid_email(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Check if the email matches the pattern
    return emailPattern.test(email);
  }

let letters;


function hiddenErrorText(){
    errorText.textContent=""
    inputEmail.classList.remove("error")
    errorText.classList.remove("error");
}
function addErrorText(){
    inputEmail.classList.add("error")
    errorText.classList.add("error")
    errorText.textContent="Valid email required"
}
inputEmail.addEventListener("input",function(e){
   hiddenErrorText()
})

btnSubmit.addEventListener("click",function(e){
    e.preventDefault()
    if(is_valid_email(inputEmail.value)){
        hiddenErrorText()
        timed=setTimeout(()=> {document.querySelector("main").style.display="none"
                               document.querySelector(".success--subscribe").style.display="flex"
        },500)
            document.querySelector("main").classList.add("hidden");
    }
    else addErrorText()
})