var km = prompt('Quanti chilometri hai intenzione di percorrere?');
km = parseInt(km);
var age = prompt('Inserisci la tua età');
age = parseInt(age);

if (isNaN(km) || isNaN(age)) {
    alert('Please insert valid values!')
    location.reload(); // Reloads the page, resetting prompt values.
}   
/* Triggers if *only* non-number characters are input in either prompt.    
   If a value includes both letters *and* numbers, everything after (and
   including) the first letter gets ignored, even more numbers. */

var price = km*0.21;

if (age < 18) {
    price = price*0.8;
} else if (age > 65) {
    price = price*0.6;
}

price = price.toFixed(2);   //Rounds the price down to two decimals.

document.getElementById('output').innerHTML ='<br/><br/>' + price + '€';
