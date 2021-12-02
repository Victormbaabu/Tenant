function login(){
    var e=newemail();
    var email=document.getElementById("email").Val;
    var password=document.getElementById("password").val;

if(email==""){
    alert("enter your email please");
}
else {
      e.setemail(email);

}
if(password==""){
    alert("enter password below");
}
else{
    e.newpassword(password);
}
}
function signup(){
    var s=newsignup();
    if(name==""){
        alert("alert input name");
    }
    if (DOB ==""){
       alert("alert enter your date of birth");
    }
    if(email==""){
        alert("enter your email");
    }
    if(signupz==""){
        alert("please sign up");
    }
}