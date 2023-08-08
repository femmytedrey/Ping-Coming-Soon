document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form");
    const emailInput = document.getElementById("Email");
    const emailError = document.querySelector(".error-message");

    form.addEventListener("submit", function(event){
        if(!validateEmail()){
            event.preventDefault();
        }
    });

    emailInput.addEventListener("input", function () {
        clearErrorMessage();
    });

    function validateEmail(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = emailInput.value.trim();

        clearErrorMessage();

        if(emailValue === ""){
            displayErrorMessage("Email cannot be empty.");
            return false;
        }
        else if(!emailRegex.test(emailValue)){
            displayErrorMessage("Invalid Email!");
            return false;
        }else{
            return true
        }
    }
    
    

    function displayErrorMessage(message){
        emailError.textContent = message;
        emailInput.classList.add("error")

    }

    function clearErrorMessage(){
        emailError.textContent = "";
        emailInput.classList.remove("error");
    }


});