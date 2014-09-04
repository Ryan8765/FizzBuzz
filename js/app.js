var buzz = "buzz";
var fizz = "fizz";
var fizzbuzz = "fizzbuzz";

//code for fizzbuzz
$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		if (i%3 == 0 && i%5 == 0) {
			console.log(fizzbuzz);
			$('#fizzbuzz').append("<li>fizzbuzz</li>");
		} else if (i%3 == 0) {
			console.log(fizz);
			$('#fizzbuzz').append("<li>fizz</li>");	
		} else if (i%5 == 0) {
			console.log(buzz);
			$('#fizzbuzz').append("<li>buzz</li>");
		} else {
			console.log(i);
			$('#fizzbuzz').append("<li>" + i + "</li>");
		}
	}
});