// Visualizzare in pagina 5 numeri casuali. 
//Da lì parte un timer di 5 secondi.
// Dopo 5 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//creo array numeri
const numbers = []
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 99) - 1)
}
console.log(numbers)

//stampo in pagina
let main = document.querySelector('#main')
main.innerHTML = `${numbers}`

//dopo 5 secondi scompaiono
setTimeout (svuotaMain, 5000)

function svuotaMain() {
    main.innerHTML = ''  
}

//dopo 6 secondi parte il prompt
setTimeout (numeriUtente, 6000)

function numeriUtente() {
    //crea array numeriUtente
    let guessedNumbers = []
    for (let i = 0; i < 5; i++) {
        let guessedNumber = parseInt(prompt("Inserisci il numero che hai visto " + (i + 1)));
        guessedNumbers.push(guessedNumber);
    } 
    console.log(guessedNumbers) 
    //controllo i numeri inseriti
    let correctNumbers = []
    for (let i = 0; i < 5; i++) {
        if (numbers.includes(guessedNumbers[i])) {
            correctNumbers.push(numbers[i])
        }
    }
    //risultato
    alert("Hai indovinato " + correctNumbers.length + " numeri: " + correctNumbers.join(", "));
}


