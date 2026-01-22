function onkormanyzat() {
    document.getElementById("myDropdownon").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtnon')) {
    let myDropdownon = document.getElementById("myDropdownon");
      if (myDropdownon.classList.contains('show')) {
        myDropdownon.classList.remove('show');
      }
    }
}