const username = document.querySelector("#user-name-input");
const pass = document.querySelector("#password-input");
const confirmPass = document.querySelector("#confirm-password-input");
const submitButton = document.querySelector("#submit-button");

function isUserValid() {
    return username.value.length > 0;
}

function userEvent(event){
    if (!isUserValid()) {
        event.target.nextElementSibling.classList.remove("hidden");
        return;
    }
    event.target.nextElementSibling.classList.add("hidden");
}

function isPasswordValid() {
    return pass.value.length >= 5;
}

function passwordEvent(event){
    if (!isPasswordValid()) {
        event.target.nextElementSibling.classList.remove("hidden");
        return;
    }
    event.target.nextElementSibling.classList.add("hidden");
}

function arePasswordsMatch() {
    return pass.value === confirmPass.value;
}

function confirmPasswordEvent(event){
    if (!arePasswordsMatch()) {
        event.target.nextElementSibling.classList.remove("hidden");
        return;
    }
    event.target.nextElementSibling.classList.add("hidden");
}

function canSubmit() {
    return isUserValid() && isPasswordValid() && arePasswordsMatch();
}

function toggleSubmitEvent(){
    submitButton.disabled = !canSubmit();
}

username.addEventListener("blur", userEvent);
username.addEventListener("keyup", userEvent);
username.addEventListener("keyup", toggleSubmitEvent);

pass.addEventListener("blur", passwordEvent);
pass.addEventListener("keyup", passwordEvent);
pass.addEventListener("keyup", toggleSubmitEvent);

confirmPass.addEventListener("blur", confirmPasswordEvent);
confirmPass.addEventListener("keyup", confirmPasswordEvent);
confirmPass.addEventListener("keyup", toggleSubmitEvent);

document.querySelector("#theme-switcher").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
})