document.getElementById("registerform").addEventListener("submit" , (event) =>{
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const registerbutton = document.querySelector("#register-button")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    registerbutton.onclick = () => {
        localStorage.setItem("username", username.value)
        localStorage.setItem("password", password.value)
        
        window.location.href = "Login.html"

        console.log("User Registered")
        console.log(eachUser)

    }

})