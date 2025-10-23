/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

const daddyEl = document.getElementById("mail-daddy");

axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((banane) => {
    console.log(banane.data);
    console.log(banane.data.response);
  });

let lista = "";

function create_li(para) {
  for (let index = 0; index < 10; index++) {
    const cosine = index;
    console.log(cosine);
    lista += `<li>${para.response}</li>`;
  }

  daddyEl.innerHTML = lista;
}
