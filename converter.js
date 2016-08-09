var userTemp = document.getElementById("userTemp");

var fahrBut = document.getElementById("farBut");
var celBut = document.getElementById("celBut");

var finalTemp = document.getElementById("output");


function toCelsius (userTemp) {
	return ((userTemp - 32) * .56);
}

function toFahrenheit (userTemp) {
	return ((userTemp * 1.8) + 32);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	
  console.log("the button clicked");

  if (fahrBut.checked === true && userTemp.value !== "") {
  	var celTemp = toCelsius(userTemp.value);
  	finalTemp.value = +celTemp.toFixed(1);	
  } else if (celBut.checked === true && userTemp.value !== "") {
  	var fahrTemp = toFahrenheit(userTemp.value);
  	finalTemp.value = +fahrTemp.toFixed(1);
  } else {
  	alert("Please enter a temperature and select a scale.");
  }
}



// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


