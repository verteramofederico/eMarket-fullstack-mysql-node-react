// ts-check

window.onload = function() {
    console.log("validando")

    let form = document.querySelector("form")

    let name = document.querySelector("#name")
    let description = document.querySelector("#description")
    let image = document.querySelector("#image")

    name?name.focus():null // para que funcione en editimage sin error
    
    form.addEventListener("submit", (e) => {

        // name validator
        if (name.value === "" || name.value.length < 2) {
            name.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#nameError")
                divError.innerHTML = "El campo nombre debe contener al menos 2 caracteres"             
        } if (name.value !== "" || name.value.length >= 2) {
            name.classList.remove("is-invalid")
                let divError = document.querySelector("#nameError")
                divError.innerHTML = ""             
        } 

        // domicilio validator
        if (description.value === "" || description.value.length < 15) {
            description.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#descriptionError")
                divError.innerHTML = "Descripcion debe contener al menos 15 caracteres"      
        }   if (description.value === "" || description.value.length >= 15) {
            description.classList.remove("is-invalid")
                let divError = document.querySelector("#descriptionError")
                divError.innerHTML = ""      
        }
        // image validator
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (image.value === "" || !allowedExtensions.exec(image.value) ) {
            image.classList.add("is-invalid")
                e.preventDefault()
                let divError = document.querySelector("#imageError")
                divError.innerHTML = "Debes ingresar imagen jpg, jpge, gif o png"
             //   alert("Debes ingresar imagen jpg, jpge, gif o png");
                
        } 
    })



}