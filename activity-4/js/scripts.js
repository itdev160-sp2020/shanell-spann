// welcome message
//www.mdnwebdocs.com
var user = 'Shanell';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest DoggyStyle reviews. ';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 140,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('studentPrice');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContext = studentPrice.toFixed(2);