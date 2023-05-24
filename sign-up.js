
/* Start Form Sign Up */
const formSignUp = document.getElementById("formsignup");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


formSignUp.onsubmit = function (eventForm) {

    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    // Condition For Username Input :
    if (usernameValue === "") {
        setError(username, "Username Is Empty");
    }else if (usernameValue.length > 10) {
        setError(username, "Username Maximum 10 Characters");
    } 
    else if (usernameValue.length <= 10) {
        setSuccess(username);
    }

    // Condition For Email Input :
    if (emailValue === "") {
        setError(email, "Email Is Empty");
    } else {
        setSuccess(email);
    }

    // Condition For Password Input :
    if (passwordValue === "") {
        setError(password, "Password Is Empty");
    } else if (passwordValue.length > 8) {
        setError(password, "Password Maximum 8 Characters");
    } else if (passwordValue.length <= 8) {
        setSuccess(password);
    }

    // Condition For Checking Password Input :
    if (password2Value === "") {
        setError(password2, "Checking Password Is Empty");
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords Do Not Match");
    } else if (password2Value === passwordValue) {
        setSuccess(password2);
    }

    // Function For Error Operation :
    function setError(input, message) {
        let fromControl = input.parentElement;
        let smallElement = fromControl.querySelector("small");

        fromControl.className = "form-control error";
        smallElement.innerText = message;
    }

    // Function For Success Operation :
    function setSuccess(input) {
        let fromControl = input.parentElement;
        fromControl.className = "form-control success";
    }

    // Condition Send Data :
    let sendData = document.forms[0].getElementsByTagName("div");
    if (sendData[0].classList.contains("success") === true && sendData[1].classList.contains("success") === true && sendData[2].classList.contains("success") === true && sendData[3].classList.contains("success") === true) {
        validationInformation = true;
    }

    // Condition For Submit Data :
    let validationInformation = false;
    if (validationInformation === false) {
        eventForm.preventDefault();
    }

};
/* End Form Sign Up */