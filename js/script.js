//imbrigliamo i bottoni 

const generateButton = document.getElementById("btn-generate");
const cancelButton = document.getElementById("btn-cancel");

//dichiariamo le varaibili della nostra "business logic"
const ratePerKM = 0.21;
const underageDiscount = 0.20;
const seniorDiscount = 0.40;
const underageDiscountName = "Sconto Minorenni";
const seniorDiscountName = "Sconto Silver";
const noDiscountName = "Biglietto Standard";


function clickGenerate() {
    //usiamo questa funzione per fare controlli sui dati inseriti

    //preleviamo i dati del form
    const passengerName = document.getElementById("passenger-name").value;
    const passengerKM = document.getElementById("passenger-km").value;
    const passengerAgeRange = document.getElementById("passenger-age-range").value;

    if (passengerName === "") {
        alert("inserire un nome");
    }
    else if (passengerKM === "0" || passengerKM === "") {
        alert("inserire una distanza di almeno 1 km");
    }
    else if (passengerKM > 2000) {
        alert(`${passengerKM} Km? Che c'è, vuoi emigrare? Fa' il bravo, su. Inserisci una distanza inferiore a 2000 Km`);
    }
    else if (passengerAgeRange === "") {
        alert("inserire la fascia d'età del passeggero");
    }
    else {
        generateTicket();
    }

}

function generateTicket() {
    //preleviamo i dati del form
    const passengerName = document.getElementById("passenger-name").value;
    const passengerKM = document.getElementById("passenger-km").value;
    const passengerAgeRange = document.getElementById("passenger-age-range").value;
    const grossTicketPrice = passengerKM * ratePerKM;

    let ticketPrice;
    let ticketRate;


    //determiniamo se c'è uno sconto applicabile con uno switch statement sul passengerAgeRange,
    //calcoliamo il ticketPrice finale formattandolo come stringa.
    //assegnamo anche il nome dell'offerta che mostreremo sul biglietto (ticketRate)
    switch (passengerAgeRange) {
        case "minor":
            ticketPrice = (grossTicketPrice * (1 - underageDiscount)).toFixed(2);
            ticketRate = underageDiscountName;
            break;
        case "senior":
            ticketPrice = (grossTicketPrice * (1 - seniorDiscount)).toFixed(2);
            ticketRate = seniorDiscountName;
            break;
        default:
            ticketPrice = grossTicketPrice.toFixed(2);
            ticketRate = noDiscountName;
            break;
    }

    //assegnamo un numero di carrozza a caso da 1 a 10
    const ticketCar = Math.floor(Math.random() * 10) + 1;

    //assegnamo un numero casuale da 90000 a 99999 come "codice CP"
    const ticketCode = Math.floor(Math.random() * 10000) + 90000;

    //scriviamo i nostri dati nei punti giusti del DOM 
    document.querySelector(".ticket-passenger p").innerHTML = passengerName;
    document.querySelector(".ticket-rate p").innerHTML = ticketRate;
    document.querySelector(".ticket-car p").innerHTML = ticketCar;
    document.querySelector(".ticket-code p").innerHTML = ticketCode;
    document.querySelector(".ticket-price p").innerHTML = `€ ${ticketPrice}`;

    //rendiamo visibile il div con le informazioni sul biglietto
    document.querySelector(".ticket-list").classList.remove("d-none");
}




generateButton.addEventListener("click", clickGenerate);


cancelButton.addEventListener("click",
    function cancelTicket() {
        document.querySelector(".ticket-list").classList.add("d-none");
        document.getElementById("passenger-name").value = '';
        document.getElementById("passenger-km").value = '';
        document.getElementById("passenger-age-range").value = '';
    }
);











// 
// let breakdownExtra = '';

// if (passengerAge >= 65) {
//     ticketPrice = (grossTicketPrice * (1 - seniorDiscount)).toFixed(2);
//     breakdownExtra = `<br> Over 65 discount (-${seniorDiscount * 100}%): <strong>-€${(grossTicketPrice * seniorDiscount).toFixed(2)}</strong><br>
//     Final price: <strong>€${ticketPrice}</strong>`;
// } 
// else if (passengerAge < 18){
//     ticketPrice = (grossTicketPrice * (1 - underageDiscount)).toFixed(2);
//     breakdownExtra = `<br> Under 18 discount (-${underageDiscount * 100}%): <strong>-€${(grossTicketPrice * underageDiscount).toFixed(2)}</strong><br>
//     Final price: <strong>€${ticketPrice}</strong>`;
// }
// else {
//     ticketPrice = grossTicketPrice.toFixed(2);
// }

// let message = `
// The price of a ${passengerKM}-kilometer ticket for a ${passengerAge}-year old is €${ticketPrice}
// `;

// let breakdown = `
// Base rate per KM: <strong>€${ratePerKM}</strong> <br>
// KM to travel: <strong>${passengerKM}</strong> <br>
// Ticket price: <strong>€${grossTicketPrice.toFixed(2)}</strong>
// ${breakdownExtra}`;
