const inputCena = document.getElementById("cena");
const inputKusy = document.getElementById("kusy");
const fieldSpolu = document.getElementById("cena_total");

document.querySelectorAll('.calculate').forEach(item => {
    item.addEventListener('input', event => {
        const total_show = inputCena.value * inputKusy.value;
        fieldSpolu.innerHTML = Math.round(total_show * 100) / 100;
    })
  })

