/* Creazione di un biglietto del treno in base all'età dell'user e in base ai km che deve percorrere con un prezzo base di 0.21€/km se l'user ha meno di 18 anni allora bisogna applicare uno sconto del 20%, se invece a più di 65 anni bisogna applicare uno sconto del 40% */

/*Nota bene il prezzo finale del biglietto non deve contenere più di 2 cifre decimali */

// elenco variabili

let userEta, kmUser, priceTicket;

let standardPriceKm = 0.21;

let youngPriceKm = standardPriceKm - (standardPriceKm * 20/100);

console.log(youngPriceKm);

let seniorPriceKm = standardPriceKm - (standardPriceKm * 40/100);

console.log(seniorPriceKm);

// Inserisci la tua età
userEta = parseInt (prompt("Inserisci la tua età"));

console.log(userEta);

// Inserisci i km che devi percorrere
kmUser = parseInt (prompt("Inserisci i km che devi percorrere"));


console.log(kmUser);

// Calcolare il prezzo del biglietto in base ai dati inseriti dall'user

    // se l'età dell'user è >= a 18 e <= a 65 allora il prezzo per km è 0.21€/km
    if ((userEta >= 18) && (userEta <= 65)) {

        priceTicket = kmUser * standardPriceKm;

        console.log(priceTicket);

    } else if (userEta < 18){ // se l'età dell'user è < di 18 allora applica uno sconto del 20%

        priceTicket = kmUser * youngPriceKm;

        console.log(priceTicket);

    
    } else if (userEta > 65) { // se l'età dell'user è > di 65 allora applica uno sconto del 40%

        priceTicket = kmUser * seniorPriceKm;

        console.log(priceTicket);

    }
