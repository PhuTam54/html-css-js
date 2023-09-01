function login(){
    if ($("#username").val()== "admin" && $("#password").val()=="password"){
        alert("You are a valid user");
    }
    else{
        alert("You are not a valid user");
    }
} 