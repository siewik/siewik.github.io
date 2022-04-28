const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);

const meno = urlParams.get('meno');
const adresa = urlParams.get('adresa');
const cislo = urlParams.get('cislo');
const mail = urlParams.get('mail');
const produkt = urlParams.get('produkt');
const cena = urlParams.get('cena');
const kusy = urlParams.get('kusy');

const iMeno = document.getElementById("i_meno");
const iAdresa = document.getElementById("i_adresa");
const iCislo = document.getElementById("i_cislo");
const iMail = document.getElementById("i_mail");
const iProdukt = document.getElementById("i_produkt");
const iCena = document.getElementById("i_cena");
const iKusy = document.getElementById("i_kusy");
const iCenaDph = document.getElementById("i_cenadph");

const selectMena = document.getElementById("mena");

const zmenaSkratkyMeny = document.getElementById("zmena_skratky_meny");
const sumaPoZmene = document.getElementById("suma_po_zmene");

var spolu = (cena * kusy).toFixed(2);
var cenaDph = (spolu * 1.2).toFixed(2);

iMeno.innerHTML = meno;
iAdresa.innerHTML = adresa;
iCislo.innerHTML = cislo;
iMail.innerHTML = mail;
iProdukt.innerHTML = produkt;
iKusy.innerHTML = kusy;
iCena.innerHTML = spolu;
iCenaDph.innerHTML = cenaDph;

function vypsat(data){
    kurz = data;
}

function prepocetMeny(){
    var aktualneZvolenaMena = selectMena.value;
    var aktualnyKurz = kurz.kurzy[aktualneZvolenaMena].dev_stred;
    var zmenenaSuma = (cenaDph / aktualnyKurz).toFixed(2);
    zmenaSkratkyMeny.innerHTML = aktualneZvolenaMena;
    sumaPoZmene.innerHTML = zmenenaSuma;
}

selectMena.addEventListener('change', prepocetMeny);


