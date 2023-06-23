

function check()
{ 
    if(form1.userid.value == "SEPCO" && form1.pwd.value == "soomro") {
    document.location.href = "sepcopb.html";
}
else {
    alert("Incorrect Username or Password");
    event.preventDefault();
    return false;
} 
} 


function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



