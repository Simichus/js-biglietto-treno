console.log('JS OK');

// Variables

var distance = parseFloat(prompt('Inserire la distanza che si vuole percorrere in Km')).toFixed(3)
console.log('Distance:', distance);

var age = parseInt(prompt('Inserire la propria età'));
console.log('Age:', age);

var price = (0.21 * distance).toFixed(2);
console.log('Price:', price);

var ticketPrice = document.getElementById('ticket');

var message = 'Il prezzo del biglietto è: €'

// Discount

if (age < 19) {
    ticketPrice.innerHTML = message + (price - ((price / 100)) * 20).toFixed(2);
} else if (age > 65) {
    ticketPrice.innerHTML = message + (price - ((price / 100) * 40)).toFixed(2);
} else {
    ticketPrice.innerHTML = message + price;
}