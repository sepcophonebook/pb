
window.onscroll = function() {myFunctions()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunctions() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

