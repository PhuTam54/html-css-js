function login(){
    if ($("#username").val()== "admin" && $("#passwork").val()=="passwork"){
        alert("You are a valid user");
    }
    else{
        alert("You are not a valid user");
    }
}