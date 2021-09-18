window.onload = function() {
    console.log("validando")

    let form = document.querySelector("form")
    let image = document.querySelector("#image")

    console.log(image)

    
    form.addEventListener("submit", (e) => {
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