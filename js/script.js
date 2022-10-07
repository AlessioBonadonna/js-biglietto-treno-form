//Consegna
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
//
//
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
//
// il mio M.O. 
// chiedere al utente il numero di km che vuole percorrere dentro una casella input
// chiedere al utente l eta che ha  dentro una casella input 
// al momento che clicco il bottone mi fa il calcolo & mi controlla se i dati inseriti sono giusti 
// il prezzo del biglietto = km* 0.21
// se eta <18 ha uno sconto del 20%
// se eta>65 sconto del 40%
//
// stampare a schermo il risultato con max 2 cifre decimali 
//
//creo la variabile del bottone e la funzione che fara il calcolo 
let bottone = document.getElementById('check');
bottone.addEventListener("click", function () {
    //variabili 
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    let prezzoBiglietto = km * 0.21;
    let scontoBiglietto;
    //console.log per vedere cosa succede
    console.log(km);
    console.log(eta);
    console.log(prezzoBiglietto);
    console.log(scontoBiglietto);

    //if per controllare se i dati inseriti sono effettivamente numeri 

    if (isNaN(km) || isNaN(eta)) {
        alert('Puoi inserire solo numeri..');
        window.location.reload();
    }

    //if per calcolare il prezzo del biglietto 

    if (eta < 18) {
        scontoBiglietto = prezzoBiglietto * 0.80;
        console.log(scontoBiglietto);
        //stampa
        document.getElementById("prezzo").innerHTML = scontoBiglietto + ' &euro;';

    } else if (eta > 65) {
        scontoBiglietto = prezzoBiglietto * 0.60;
        console.log(scontoBiglietto);
        //stampa
        document.getElementById("prezzo").innerHTML = scontoBiglietto + ' &euro;';
    } else {
        scontoBiglietto = prezzoBiglietto;
        console.log(scontoBiglietto);
        //stampa
        document.getElementById("prezzo").innerHTML = scontoBiglietto + ' &euro;';


    }

});

