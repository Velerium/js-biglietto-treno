var km = prompt('Quanti chilometri hai intenzione di percorrere?');
km = parseInt(km);
var year = prompt('Inserisci il tuo anno di nascita');
year = parseInt(year);

if (isNaN(km) || isNaN(year)) {
    alert('Please insert valid values!')
    location.reload(); // Reloads the page, resetting prompt values.
}   
/* Triggers if non-number characters are input in either prompt
   *before* any number.
   If a value includes non-number characters that follow numbers,
   everything after (and including) the first one gets ignored */

var d = new Date;
var age = d.getFullYear() - year;

var price = km*0.21;

if (age < 18) {
    price = price*0.8;
} else if (age > 65) {
    price = price*0.6;
}

price = price.toFixed(2);   //Rounds the price down to two decimals.

document.getElementById('output').innerHTML ='<br/><br/>' + price + '€';
