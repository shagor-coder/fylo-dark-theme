
// Form Validation

const form = document.querySelector('.form')

const emailField = document.querySelector('input[type="email"]');

const submitField = document.querySelector('input[type="submit"]');

const errorField = document.querySelector('.error');

// let emailFieldvalue = ''

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailField.value === "" || emailField.value == null) {
        errorField.innerHTML = "Please Fill Out";
        return false
    }
    else if (emailField != "") {
        errorField.innerHTML = null;
        return true
    }
})






















































































//# sourceMappingURL=script.js.map
