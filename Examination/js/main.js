// Check username + email
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    phone = id("phone"),
    job = id("job"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Cannot be blank");
    engine(email, 1, "Cannot be blank");
    engine(phone, 2, "Cannot be blank")
    engine(password, 3, "Cannot be blank")
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        //icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};

// Check password

$('#password, #confirmpassword').on('keyup', function(){

    $('.confirm-message').removeClass('success-message').removeClass('error-message');

    let password=$('#password').val();
    let confirm_password=$('#confirmpassword').val();

    if(confirm_password===password)
    {
        $('.confirm-message').text('Password Match!').addClass('success-message');
    }
    else{
        $('.confirm-message').text("Password Doesn't Match!").addClass('error-message');
    }

});
