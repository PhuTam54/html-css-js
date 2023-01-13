
const usernameEl = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')
const confirmPasswordEl = document.querySelector('#confirmpassword')
const phone = document.querySelector('#phone')

const form = document.querySelector('#signup')

// check 
const isRequired = value => value === '' ? false : true
const isBetween = (length, min, max) => length < min || lenghth > max ? flase : true

// Check username
const checkUsername = () => {
    let valid = false
    const min = 3, max = 25
    const username = usernameEl.value.trim()
    if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl)
        valid = true
    }
    return valid
}

const checkEmail = () => {
    let valid = false
    const email = emailEl.value.trim()
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.')
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl)
        valid = true
    }
    return valid
}

const checkPassword = () => {
    let valid = false

    const password = passwordEl.value.trim()

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.')
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase' +
            'character, 1 uppercase characters, 1 number, and 1 speacial character in (!@#$%^&*)')
    } else {
        showSuccess(passwordEl)
        valid = true
    }

    return valid
}

const checkConfirmPassword = () => {
    let valid = false
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim()
    const password = passwordEl.value.trim()

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again.')
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match')
    } else {
        showSuccess(confirmPasswordEl)
        valid = true
    }

    return valid
}

const isEmailValid = (email) => {
    //Regular expression (check email)
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const isPasswordSecure = (password) => {
    //reguar expression (check password)
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    return re.test(password)
}
const isPhoneNumber = (phone) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    return re.test(password)
}

// Show
const showError = (input, message) => {
    //get the form-feild element 
    const formFeild = input.parentElement
    //add the error class
    formFeild.classList.remove('success')
    formFeild.classList.add('error')

    //show the error message
    const error = formFeild.querySelector('small')
    error.textContent = message

}

const showSuccess = (input) => {
    //get the form-feild element 
    const formFeild = input.parentElement
    //remove the error class
    formFeild.classList.remove('error')
    formFeild.classList.add('success')

    //hide the error message
    const error = formFeild.querySelector('small')
    error.textContent = ''
}

// Eventlistener
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault()

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword()

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid

    // submit to the server if the form is valid
    if (isFormValid) {

    }
})

const debounce = (fn, delay = 1) => {
    let timeoutId;
    return (...args) => {
        //cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        //setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername()
            break
        case 'email':
            checkEmail()
            break
        case 'password':
            checkPassword()
            break
        case 'confirmpassword':
            checkConfirmPassword()
            break
    }
}))