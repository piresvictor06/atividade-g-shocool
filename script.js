let countClicks = 0;
let actionButton = document.getElementById("actionButton");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let message = document.getElementById("message");

function action() {
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;
   

    if (!name || !email || !password) {
        message.textContent = "espacos em branco";
        message.className = "error";
    } else {
        message.textContent = "Sucesso!";
        message.className = "success";
    }
}
