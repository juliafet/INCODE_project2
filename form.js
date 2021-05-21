document.addEventListener("DOMContentLoaded", () => {

    const formSubmit = document.querySelector("#submit")
    const form = document.querySelector("form")
    const formFname = document.querySelector("#fname")
    const formLname = document.querySelector("#lname")
    const formTel = document.querySelector("#phone")
    const formEmail = document.querySelector("#email")
    const formText = document.querySelector("#text")
    const mainSubmit = document.querySelector("main")

    // removing spaces, dashes and parantheses
    /*     let regexTel = /[() +-]+/g
        let newTel = formTel.value.replace(regexTel, "") */


    form.onsubmit = (e) => {
        e.preventDefault()
        const fnameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(formFname.value)
        const lnameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(formLname.value)
        const emailValid = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\-_\.]*@[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_\.]+$/.test(formEmail.value)
        const telValid = /[0-9]/.test(formTel.value)

        if (emailValid && fnameValid && lnameValid && telValid) { // the "=== true" is not needed
            mainSubmit.style.opacity = '0.4'
            document.querySelector("#popup-container").style.display = 'flex'
            document.querySelector(".popup").style.background = '#FCFCFC'
        } else {
            console.log("Not valid info")
        }
    }

    document.querySelector("#popup-button").onclick = (e) => {
        mainSubmit.style.opacity = '1'
        document.querySelector("#popup-container").style.display = 'none'
        form.reset();
        console.log("Button clicked")
    }

    // in case form attribute is equal novalidate

    /* 
            if (formTel.value === '') {
                telValid = true
            } else if (/[\d \-]/.test(formTel.value) === true) {
                telValid = true
            } else {
                telValid = false
            }

            git+https://github.com/hi-i-am-ana/Pathe-Gaumont_movie-platform.git
    */
})

