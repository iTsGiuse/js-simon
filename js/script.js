/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice 
quanti e quali dei numeri da indovinare sono stati individuati. */

/* INIZIALIZZAZIONE VARIABILI */
const numeriGenerati = [];
const numeriInseriti = [];
let counterGiusto = 0;
let counterSbagliato = 0;
let numeroGiusto = ' ';
let numeroSbagliato = ' ';

/* SELEZIONA IL DIV DALL'HTML */
const sparisci = document.querySelector('#numeri-giusto');

/* FAI PARTIRE LA FUNZIONE PER GENERARE NUMERI RANDOM */
numeroGenerato();

/* FAI SPARIRE IL DIV SELEZIONATO DALL'HTML DOPO 30 SECONDI */
setTimeout(function() {
    sparisci.innerHTML = ``;
}, 30000); 

/* FAI PARTIRE LE DUE FUNZIONI DOPO 31 SECONDI */
setTimeout(function() {
    userInput();
    check();
}, 31000); 


/* FUNZIONI */
/* PER GENERARE NUMERI RANDOM */
function numeroGenerato(){
   
    for (let i=0; i<5; i++) {
        let number = Math.floor(Math.random()*100);
        numeriGenerati.push(number);
    }

    sparisci.innerHTML = `<div> I numeri generati sono ${numeriGenerati.join('-')} </div>`;
    
}
/* PER FAR INSERIRE I NUMERI DALL'UTENTE */
function userInput(){
   
    for(let i=0; i<5; i++){

       let userNumber = parseInt(prompt('Inserisci i numeri che hai visto prima'));
       numeriInseriti.push(userNumber);
      
    }
}
/* PER CONTROLLARE CHE IL NUMERO GENERATO E IL NUMERO INSERITO CORRSIPONDANO. */
function check(){
    
    for (let i=0; i<5; i++){
        
        if (numeriInseriti[i] === numeriGenerati[i]){
            /* SE SI INCREMENTA COUNTER E SALVA IL NUMERO INDOVINATO */
            counterGiusto++;
            numeroGiusto += numeriInseriti[i].toString() + ' ' ;
        }  else {
            /* SE NO INCREMENTA COUNTER E SALVA IL NUMERO SBAGLIATO */
            counterSbagliato++;
            numeroSbagliato += numeriInseriti[i].toString() + ' ' ;
        }

     }
    
    /* MOSTRA I RISLUTATI */
    alert('I numeri giusti che hai indovinato sono stati: ' + counterGiusto + ' e sono: ' + numeroGiusto);
    alert('I numeri che non hai indovinato sono stati: ' + counterSbagliato + ' e sono: ' + numeroSbagliato);
}