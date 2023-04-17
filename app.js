const nameInput = document.getElementById("nameField")
const title = document.getElementById("title");
const forgotPassTxt = document.getElementById("forgotPasswordTxt");
const button = document.getElementById("signUpBtn");
const pTxt = document.getElementById("login");
const aTxt = document.getElementById("signupTxt");

var isSignUp = true;


aTxt.addEventListener("click", ()=>{
    if(isSignUp){
        title.innerHTML = "Log in"
        forgotPassTxt.style.display = "block"
        button.value = "Log in"
        pTxt.textContent = "Create an Account!"
        aTxt.textContent = "Sign Up" 
        nameInput.style.display = "none"
        isSignUp = false
    }else{
        title.innerHTML = "Sign up"
        forgotPassTxt.style.display = "none"
        button.value = "Sign up"
        pTxt.textContent = "I already have account!"
        aTxt.textContent = "Log in"
        nameInput.style.display = "block"
        isSignUp = true
    }
});


