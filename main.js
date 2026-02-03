var myDropdown = document.getElementById("myDropdown");
var myDropdown2 = document.getElementById("myDropdown2");
var myDropdown3 = document.getElementById("myDropdown3");
function myFunction() {
  myDropdown.classList.toggle("show");
}

function myFunction2() {
  myDropdown2.classList.toggle("show2");
}

function myFunction3() {
  myDropdown3.classList.toggle("show3");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    myDropdown2.classList.remove('show2');
    myDropdown3.classList.remove('show3');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }

  if(!e.target.matches('.dropbtn2')) {
    myDropdown.classList.remove('show');
    myDropdown3.classList.remove('show3');
    if (myDropdown2.classList.contains('show2')) {
      myDropdown2.classList.remove('show2');
    }
  }

  if(!e.target.matches('.dropbtn3')) {
    myDropdown2.classList.remove('show2');
    myDropdown.classList.remove('show');
    if (myDropdown3.classList.contains('show3')) {
      myDropdown3.classList.remove('show3');
    }
  }
}