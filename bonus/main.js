/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

//SOLUZIONE CON FUNZIONE CHE NON FUNZIONA
/*
function create_li() {
  let lista = "";

  for (let index = 0; index < 10; index++) {
    const cosine = index;

    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((banane) => {
        lista += `<li>${banane.data.response}</li>`;

      });
  }

 
}

const daddyEl = document.getElementById("mail-daddy");

daddyEl.innerHTML = create_li();
*/

//SOLUZIONE ALTERNATIVA

const daddyEl = document.getElementById("mail-daddy");
let lista = "";

for (let index = 0; index < 10; index++) {
  const cosine = index;

  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((banane) => {
      console.log(banane.data.response);

      lista += `<li>${banane.data.response}
      <br>
      <button type="button">Usa questa mail</button></li>`;
      daddyEl.innerHTML = lista;
    });
  daddyEl.innerHTML = lista;
}

const banner_scam = setInterval(() => {
  document.getElementById("best-banner").classList.remove("d-none");

  setTimeout(() => {
    document.getElementById("best-banner").classList.add("d-none");
  }, 500);
}, 1000);

setTimeout(() => {
  clearInterval(banner_scam);
  document.getElementById("last-banner").classList.remove("d-none");

  setTimeout(() => {
    document.getElementById("last-banner").classList.add("d-none");
  }, 5000);
}, 10000);
