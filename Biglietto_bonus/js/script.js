var km = prompt('Quanti chilometri hai intenzione di percorrere?');
km = parseInt(km);
var ageYear = prompt('Inserisci il tuo anno di nascita');
ageYear = parseInt(ageYear);
var month = prompt('Inserisci il tuo mese di nascita (1-12)');
month = parseInt(month);
month--;  // Remember: months are from 0 to 11, not 1 to 12!!
var day = prompt('Inserisci il tuo giorno di nascita (1-31)');
day = parseInt(day);

if (isNaN(km) || isNaN(ageYear) || isNaN(month) || isNaN(day)) {
    alert('Please insert valid values!')
    location.reload(); // Reloads the page, resetting prompt values.
}   
/* Triggers if non-number characters are input in any prompt
   *before* any number.
   If a value includes non-number characters that follow numbers,
   everything after (and including) the first one gets ignored */

var d = new Date;

var age = d.getFullYear() - ageYear;

if (age === 18) {
    var ageMonth = d.getMonth();

    if (ageMonth < month) {
        age = 17;

    }   else if (ageMonth === month) {
        var ageDay = d.getDate();
        if (ageDay < day) {
            age = 17;
        }
    }
}

if (age === 65) {
    var ageMonth = d.getMonth();

    if (ageMonth > month) {
        age = 66;

    }   else if (ageMonth === month) {
        var ageDay = d.getDate();
        if (ageDay > day) {
            age = 66;
        }
    }
}

var price = km*0.21;

if (age < 18) {
    price = price*0.8;
} else if (age > 65) {
    price = price*0.6;
}

price = price.toFixed(2);   //Rounds the price down to two decimals.

document.getElementById('output').innerHTML ='<br/><br/>' + price + '€';
