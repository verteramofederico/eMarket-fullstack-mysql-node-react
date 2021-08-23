window.onload = function() {
    console.log("validando")

    let form = document.querySelector("form")

    let user = document.querySelector(".formUser")
    let password = document.querySelector(".formPassword")

    user.focus()
    form.addEventListener("submit", (e) => {
        re= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (user.value === "" || !re.exec(user.value)
        || password.value === "" || password.value.length < 6) {
            user.classList.add("is-invalid")
            password.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#passwordError")
                divError.innerHTML += "Usuario o contraseña invalida"            
        } 
        


    })



}