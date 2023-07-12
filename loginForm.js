function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var validUsername = "admin";
    var validPassword = "admin";

    if(username === validUsername && password === validPassword){
        alert("Login succesful!");
    }
    else{
        alert("Invalid Username or Password,Please try again.");
    }
}