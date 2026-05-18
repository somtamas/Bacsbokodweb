document.querySelector(".popupok").style.display = "none";

function regisztracio(){
  let nev = document.getElementById("regnevinput").value;
  let jelszo = document.getElementById("regjelszoinput").value;
  let szamok = "0123456789";

  if(jelszo.length >= 8 && szamok.split("").some(szam => jelszo.includes(szam)))
  {
    localStorage.setItem("nev",nev);
    localStorage.setItem("jelszo",jelszo);
    sessionStorage.setItem("belepve", "igen");
    document.querySelector(".popupok").style.display = "none";
  }
  else{
    alert("A jelszó nem felel meg a követelményeknek! (Minimum 8 karakter és minimum 1 szám)");
    document.getElementById("regjelszoinput").value = "";
  }
}

function bejelentkezes(){
  let nev = document.getElementById("bejnevinput").value;
  let jelszo = document.getElementById("bejjelszoinput").value;
  let mentettNev = localStorage.getItem("nev");
  let mentettJelszo = localStorage.getItem("jelszo");

  if(nev == mentettNev && jelszo == mentettJelszo){
    sessionStorage.setItem("belepve", "igen");
    document.querySelector(".popupok").style.display = "none";
  }
  else{
    alert("Hibás adatok");
  }
}

if(sessionStorage.getItem("belepve") != "igen"){
  setTimeout(() => {
  document.querySelector(".popupok").style.display = "flex";
  console.log(localStorage.getItem("nev"));
  console.log(localStorage.getItem("jelszo"));
}, 3000);
}
