function customerPage()
{
  var email=document.getElementById("email");
  var pwd=document.getElementById("password");
  if(email.value.match("avayambalk@gmail.com") && (pwd.value.match("avay@123")))
  {
    location.href="index.html";
  }
}

function ValidateEmail(email){
var emailRegEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(email.value.match(emailRegEx))
{
  return true;
}
else {
    alert("Please enter Valid Email Address")
    document.LoginForm.email.focus();
    return false;
  }
}

function ValidatePassword(pwd){
  if(pwd.value.match(""))
  {
    alert(" Please Enter your Password")
    document.LoginForm.password.focus();
  }
  else {
    return true;
  }
}
