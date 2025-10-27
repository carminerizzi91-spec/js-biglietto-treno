// 1. Input utente
const km = Number(prompt("Quanti chilometri vuoi percorrere?"));
const age = Number(prompt("Quanti anni hai?"));

// 2. Prezzo base
let ticketPrice = km * 0.21;

// 3. Applicazione sconti
if (age < 18) {
    ticketPrice *= 0.8; // sconto 20%
} else if (age > 65) {
    ticketPrice *= 0.6; // sconto 40%
}

// 4. Calcolo del prezzo finale (già fatto sopra)
const finalPrice = ticketPrice;

// 5. Stampa del prezzo finale formattato a due decimali
console.log("Il prezzo del biglietto è: €" + finalPrice.toFixed(2));