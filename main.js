function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    myDropdown2.classList.remove('show2');
    myDropdown3.classList.remove('show3');
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown2.classList.remove('show');
    }
  }
}

window.onclick = function(f) {
  if (!f.target.matches('.dropbtn2')) {
    myDropdown2.classList.remove('show');
    myDropdown3.classList.remove('show3');
    var myDropdown2 = document.getElementById("myDropdown2");
    if (myDropdown2.classList.contains('show2')) {
      myDropdown.classList.remove('show2');
    }
  }
}

window.onclick = function(g) {
  if (!g.target.matches('.dropbtn3')) {
    myDropdown2.classList.remove('show2');
    myDropdown3.classList.remove('show');
    var myDropdown3 = document.getElementById("myDropdown3");
    if (myDropdown3.classList.contains('show3')) {
      myDropdown2.classList.remove('show3');
    }
  }
}