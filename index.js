import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];
letrehozTablazat();
osszesit();
befutott();
torolEsemeny();
ellenoriz();

// 1. feladat
function letrehozTablazat() {
  let txt = "<table>";
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `<tr>
                    <td>${FUTOK[index].nev}</td>
                    <td>${FUTOK[index].nemzetiseg}</td>
                    <td>${FUTOK[index].versenySzam}</td>
                </tr>`;
  }
  txt += "</table>";
  const FELADAT1 = document.querySelector("#feladat_1");
  FELADAT1.innerHTML += txt;
}

// 2. feladat
function osszesit() {
  let fel = 0;
  let mar = 0;
  let tiz = 0;
  for (let index = 0; index < FUTOK.length; index++) {
    if (FUTOK[index].versenySzam == "félmaraton") {
      fel++;
    } else if (FUTOK[index].versenySzam == "maraton") {
      mar++;
    } else {
      tiz++;
    }
  }
  let txt = `<p>félmaraton: ${fel}</p><p>maraton: ${mar}</p><p>10km: ${tiz}</p>`;
  const FELADAT2 = document.querySelector("#feladat_2");
  FELADAT2.innerHTML += txt;
}

// 3. feladat
function befutott() {
  let txt = "";
  const SOR = document.querySelectorAll("#feladat_1 tr");
  const FELADAT3 = document.querySelector("#feladat_3");
  for (let index = 0; index < SOR.length; index++) {
        
    SOR[index].addEventListener("click", esemenyKezelo);
        function esemenyKezelo() {
            
            txt = `<tr>
                <td>${FUTOK[index].nev}</td>
                <td>${FUTOK[index].nemzetiseg}</td>
                <td>${FUTOK[index].versenyIdo}</td>
            </tr>`;
            if (SOR[index].classList.value != "befutott") {
                FELADAT3.innerHTML += txt;
            }
            SOR[index].classList.add("befutott");  
            
            
    }
    }
    
  }

// 4. feladat
function torolEsemeny() {
  const BEFUTOTT = document.querySelector("#feladat_3");
  const TORLES = document.querySelector("#options button");
  TORLES.addEventListener("click", torlesEsemeny);
  function torlesEsemeny() {
    BEFUTOTT.innerHTML = "";
    const SOR = document.querySelectorAll("#feladat_1 tr");
    for (let index = 0; index < SOR.length; index++) {
        SOR[index].classList.remove("befutott"); 
    }
  }
}

// 5. feladat
function ellenoriz() {
    const FELADAT3 = document.querySelectorAll("#feladat_3 tr");
    const SOR = document.querySelectorAll("#feladat_1 tr");
    if (FELADAT3.length == SOR.length) {
        alert("Verseny véget ért!");
    }
    
}
