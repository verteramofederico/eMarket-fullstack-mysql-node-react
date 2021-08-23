window.onload = function() {
    console.log("validando")

    let form = document.querySelector("form")

    let name = document.querySelector(".formName")
    let email = document.querySelector(".formEmail")
    let domicilio = document.querySelector(".formDomicilio")
    let image = document.querySelector(".formImage")
    let password = document.querySelector(".formPassword")

    name.focus()
    form.addEventListener("submit", (e) => {

        // name validator
        if (name.value === "" || name.value.length < 2) {
            name.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#nameError")
                divError.innerHTML += "El campo nombre debe contener al menos 2 caracteres"
                // alert("El campo nombre debe contener al menos 2 caracteres");
                
        } 
        
        // email validator
        re= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email.value === "" || !re.exec(email.value)) {
            email.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#emailError")
                divError.innerHTML += "Debe ingresar un email valido"
                // alert("Debe ingresar un email valido");
                
        } 

        // domicilio validator
        if (domicilio.value === "") {
            domicilio.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#domicilioError")
                divError.innerHTML += "Debe completar un domicilio"
               // alert("Debes ingresar un domicilio");
                
        }

        // image validator
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (image.value === "" || !allowedExtensions.exec(image.value) ) {
            image.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#imageError")
                divError.innerHTML += "Debes ingresar imagen jpg, jpge, gif o png"
             //   alert("Debes ingresar imagen jpg, jpge, gif o png");
                
        } 
        
        // password validator
        if (password.value === "" || password.value.length < 6) {
            password.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#passwordError")
                divError.innerHTML += "Password debe tener al menos 6 caracteres"
             //   alert("Password debe tener al menos 6 caracteres");
                
        } 


    })



}