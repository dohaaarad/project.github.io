/* Start Form Login */
const formLogin = document.getElementById("form-login");
const usernameLogin = document.getElementById("username-login");
const passwordLogin = document.getElementById("password-login");
const allInput = document.querySelector("input");

formLogin.onsubmit = function(eventFormLogin) {
    let usernameLoginValue = usernameLogin.value.trim();
    let passwordLoginValue = passwordLogin.value.trim();

    if (usernameLoginValue === "") {
        setError(usernameLogin, "Username Is Empty");
    } else if (usernameLoginValue.length > 10) {
        setError(usernameLogin, "Username Maximum 10 Characters");
    } else if (usernameLoginValue.length <= 10) {
        setSuccess(usernameLogin);
    }

    if (passwordLoginValue === "") {
        setError(passwordLogin, "Password Is Empty");
    } else if (passwordLoginValue.length > 8) {
        setError(passwordLogin, "Password Maximum 8 Characters");
    } else if (passwordLoginValue.length <= 8) {
        setSuccess(passwordLogin);
    }

    // Start Function For Error Message :
    function setError(input, message) {
        let fromControl = input.parentElement;
        let smallElement = fromControl.querySelector("small");

        fromControl.className = "form-control error";
        smallElement.innerText = message;
    }

    // Start FunctionFor Success Operation :
    function setSuccess(input) {
        let fromControl = input.parentElement;
        fromControl.className = "form-control success";
    }

    // Condition Send Data :
    let sendData = document.forms[0].getElementsByTagName("div");
    if (sendData[0].classList.contains("success") === true && sendData[1].classList.contains("success") === true) {
        validationLogin = true;
    }

    // Condition For Submit Data  :
    let validationLogin = false;
    if (validationLogin  === false) {
        eventFormLogin.preventDefault();
    }
};
/* End Form Login */
