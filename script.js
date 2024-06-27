const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        //mostar aviso de erro
        errorInput(username, "Preencha um nome de usuario...")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        //mostar aviso de erro
        errorInput(email, "Email obrigátorio...")
    } else if (!emailValue.includes("@")) {
        errorInput(email)
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        //mostar aviso de erro
        errorInput(password, "Senha obrigátoria...")
    } else if (passwordValue.length < 8) {
        errorInput(password, "Senha precisar ter 8 caracteres...")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (passwordConfirmationValue === "") {
        //mostar aviso de erro
        errorInput(passwordConfirmation, "Redigite a senha obrigátoria...")
    } else if (passwordConfirmationValue !== passwordValue) {
        errorInput(passwordConfirmation, "Senhas não conferem...")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("Cadastrado com sucesso!")
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}