// Snack 1: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.

var parola1 = prompt('Inserisci la prima parola');

var parola2 = prompt('Inserisci la seconda parola');

var risultato = wordLength (parola1,parola2)

function wordLength(word1, word2) {
  if (parola1.length > parola2.length) {
    return 'La parola 1 è più lunga'
  } else if (parola1.length < parola2.length){
    return 'La parola 2 è più lunga'
  }
    return 'Le parole hanno la stessa lunghezza';
}

console.log(risultato);


// Snack 2: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.



// Snack 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.