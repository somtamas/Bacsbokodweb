document.querySelector(".popupok").style.display = "none";

function regisztracio(){
  let nev = document.getElementById("regnevinput").value;
  let jelszo = document.getElementById("regjelszoinput").value;

  localStorage.setItem("nev",nev);
  localStorage.setItem("jelszo",jelszo);
  document.querySelector(".popupok").style.display = "none";
}

function bejelentkezes(){
  let nev = document.getElementById("bejnevinput").value;
  let jelszo = document.getElementById("bejjelszoinput").value;
  let mentettNev = localStorage.getItem("nev");
  let mentettJelszo = localStorage.getItem("jelszo");

  if(nev == mentettNev && jelszo == mentettJelszo){
    document.querySelector(".popupok").style.display = "none";
  }
  else{
    alert("Hibás adatok");
  }
}


setTimeout(() => {
  document.querySelector(".popupok").style.display = "flex";
  console.log(localStorage.getItem("nev"));
  console.log(localStorage.getItem("jelszo"));
}, 3000);
