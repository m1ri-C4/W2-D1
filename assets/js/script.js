/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = "Miriam";
const cognome = "Caridi";
console.log(`Ciao, mi chiamo ${nome} ${cognome}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 5;
console.log(`${a} + ${b} = ${a + b} `);
console.log(`${a} - ${b} = ${a - b} `);
console.log(`${a} x ${b} = ${a * b} `);
console.log(`${a} : ${b} = ${a / b} `);
console.log(`${a} : ${b} da come resto ${a % b} `);
console.log(`${a} elevato a ${b} = ${a ** b} `);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const annoNascita = 2004;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;
const etaTraDieciAnni = etaOggi + 10;
const etaCinqueAnniFa = etaOggi - 5;
console.log(`Oggi ho ${etaOggi} anni`);
console.log(`Tra dieci anni avrò ${etaTraDieciAnni} anni`);
console.log(`Cinque anni fa avevo ${etaCinqueAnniFa} anni`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let eta = 21;
let maggiorenne = eta >= 18;
console.log(`Età: ${eta} - Maggiorenne: ${maggiorenne}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let oggetto = "Sedia";
let numero = 10;
let vero = true;
let no = null;
let boh;
console.log(typeof oggetto);
console.log(typeof numero);
console.log(typeof vero);
console.log(typeof no);
console.log(typeof boh);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 5;
let string = "5";
console.log(5 === "5");
console.log(5 == "5");
// '===' confronta valore e tipo (strict), mentre '==' confronta solo i valori convertendo i tipi (lasca).

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log(true + 1); // 2
console.log("10" * "2"); // 20

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 10;
console.log(`n è pari: `+ (n % 2 === 0));
console.log(`n è divisibile per 3: `+ (n % 3 === 0));
console.log(`n è pari e divisibile per 3: `+ (n % 2 === 0 && n % 3 === 0));

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */