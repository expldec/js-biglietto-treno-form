// Settiamo gli input richiesti e tutti i valori dati dalla consegna
// la percentuale di sconto l'ho scritta in forma decimale (es. 40% -> 0.40) per facilità di calcolo.

const passengerKM = prompt("How many kilometers does the passenger need to travel?");
const passengerAge = prompt("What is the age of the passenger?");
const ratePerKM = 0.21;
const underageDiscount = 0.20;
const over65Discount = 0.40;

// calcoliamo il prezzo del biglietto al lordo di eventuali sconti
const grossTicketPrice = passengerKM * ratePerKM;
// inizializziamo una variabile che conterrà il prezzo finale al netto degli sconti
let ticketPrice;
// inizializziamo una variabile stringa che ci servirà per mostrare sulla pagina le informazioni extra
// sul calcolo del prezzo finale del biglietto
let breakdownExtra = '';

// controlliamo se il passeggero rientra in un'età che ha diritto a uno sconto 
if (passengerAge >= 65) {
    // per ottenere il prezzo finale, moltiplichiamo il prezzo lordo per (1 meno lo sconto decimale)
    // e lo convertiamo in un numero a 2 cifre decimali
    ticketPrice = (grossTicketPrice * (1 - over65Discount)).toFixed(2);
    // aggiungiamo dell'HTML che scriverà sulla pagina i calcoli intermedi.
    breakdownExtra = `<br> Over 65 discount (-${over65Discount * 100}%): <strong>-€${(grossTicketPrice * over65Discount).toFixed(2)}</strong><br>
    Final price: <strong>€${ticketPrice}</strong>`;
} 
// come sopra, ma per gli under18
else if (passengerAge < 18){
    ticketPrice = (grossTicketPrice * (1 - underageDiscount)).toFixed(2);
    breakdownExtra = `<br> Under 18 discount (-${underageDiscount * 100}%): <strong>-€${(grossTicketPrice * underageDiscount).toFixed(2)}</strong><br>
    Final price: <strong>€${ticketPrice}</strong>`;
}
// se il passeggero non ha diritto allo sconto, il prezzo finale è uguale al prezzo lordo.
// questo è anche il momento di convertire il prezzo finale in una stringa con 2 decimali 
else {
    ticketPrice = grossTicketPrice.toFixed(2);
}

// inizializziamo la variabile che contiene l'HTML del titolo che conterrà in sintesi i dati forniti e il prezzo finale
let message = `
The price of a ${passengerKM}-kilometer ticket for a ${passengerAge}-year old is €${ticketPrice}
`;

// inizializziamo anche una variabile contenente l'HTML da mstrare sotto il titolo,
// che elenca nel dettaglio i dati forniti, il risultato del calcolo,
// e eventuali calcoli extra per gli aventi diritto allo sconto (breakdownExtra).
let breakdown = `
Base rate per KM: <strong>€${ratePerKM}</strong> <br>
KM to travel: <strong>${passengerKM}</strong> <br>
Ticket price: <strong>€${grossTicketPrice.toFixed(2)}</strong>
${breakdownExtra}`;

// piazziamo le nostre variabili nella pagina
document.getElementById('message').innerHTML = message;
document.getElementById('breakdown').innerHTML = breakdown;