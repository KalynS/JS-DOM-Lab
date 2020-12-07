let selectedScale = document.getElementById("options")
let celsiusText = document.querySelector("#outputC")
let fahrenheitText = document.querySelector("#outputF")
let kelvinText = document.querySelector("#outputK")
let rankineText = document.querySelector("#outputR")

document.querySelector("#button").addEventListener('click',clickMe)

// Fahrenheit Conversions
function fahrenheitConversion(){
    let fahrenheit = document.getElementById("textbox").value;
   fahrenheitText.innerHTML = fahrenheit + " F"
}

function celsiusConversion(){
    let fahrenheitIn = document.querySelector("#textbox").value
    let product = (parseInt(fahrenheitIn) -32) * 5/9 
    celsiusText.innerHTML = product.toFixed(2) + ' C'
   
}

function kelvinConversion(){
    let fahrenheitIn = document.querySelector("#textbox").value
    let product = (parseInt(fahrenheitIn) -32) * 5/9 +273.15;
    kelvinText.innerHTML = product.toFixed(2) + ' K'
    
}

function rankineConversion(){
    let fahrenheitIn = document.querySelector("#textbox").value
    let product = parseInt(fahrenheitIn)  + 459.67
    rankineText.innerHTML = product.toFixed(2) + ' R'
}

// Celsius Conversions
function celsiusVal(){
    let celsius = document.getElementById("textbox").value;
    celsiusText.innerHTML = celsius + " C";
}

function celsiusToFahrenheit(){
    let celsiusIn = document.querySelector("#textbox").value
    let product = (parseInt(celsiusIn) * 9/5) + 32
    fahrenheitText.innerHTML = product.toFixed(2) + ' F'
}

function celsiusToKelvin(){
    let celsiusIn = document.querySelector("#textbox").value
    let product = parseInt(celsiusIn) + 273.15
    kelvinText.innerHTML = product.toFixed(2) + ' K'
}

function celsiusToRankine(){
    let celsiusIn = document.querySelector("#textbox").value
    let product = parseInt(celsiusIn) * 9/5 + 491.67
    rankineText.innerHTML = product.toFixed(2) + ' R'
}


//Kelvin Conversions 
function kelvinVal(){
    let kelvin = document.getElementById("textbox").value;
    kelvinText.innerHTML = kelvin + " K";
}

function kelvinToFahrenheit(){
    let kelvinIn = document.querySelector("#textbox").value
    let product = (parseInt(kelvinIn) - 273.15 ) * 9/5 + 32
    fahrenheitText.innerHTML = product.toFixed(2) + ' F'
}

function kelvinToCelsius(){
    let kelvinIn = document.querySelector("#textbox").value
    let product = parseInt(kelvinIn) - 273.15
    celsiusText.innerHTML = product.toFixed(2) + ' C'
}

function kelvinToRankine(){
    let kelvinIn = document.querySelector("#textbox").value
    let product = (parseInt(kelvinIn) * 1.8) 
    rankineText.innerHTML = product.toFixed(2) + ' R'
}

//Rankine Conversions 
function rankineVal(){
    let celsius = document.getElementById("textbox").value;
    rankineText.innerHTML = celsius + " R";
}

function rankineToFahrenheit(){
    let rankineIn = document.querySelector("#textbox").value
    let product = parseInt(rankineIn) - 459.67
    fahrenheitText.innerHTML = product.toFixed(2) + ' F'
}
function rankineToCelsius(){
    let rankineIn = document.querySelector("#textbox").value
    let product = (parseInt(rankineIn) - 491.67) * 5/9
    celsiusText.innerHTML = product.toFixed(2) + ' C'
}

function rankineToKelvin(){
    let rankineIn = document.querySelector("#textbox").value
    let product = (parseInt(rankineIn) * 5/9) 
    kelvinText.innerHTML = product.toFixed(2) + ' K'
}



function clickMe(){
    if(selectedScale.value === "Fahrenheit"){
    celsiusConversion();
    fahrenheitConversion();
    kelvinConversion();
    rankineConversion();
    } if (selectedScale.value === "Celsius"){
    celsiusVal();
    celsiusToFahrenheit();
    celsiusToKelvin();
    celsiusToRankine();
    } else if (selectedScale.value === "Kelvin"){
    kelvinVal();
    kelvinToFahrenheit();
    kelvinToCelsius();
    kelvinToRankine();
    } else if ( selectedScale.value === "Rankine"){
    rankineVal(); 
    rankineToFahrenheit();
    rankineToCelsius();
    rankineToKelvin();
    }    
}

function getSelectedScale(){
    let selectedScale = document.getElementById("options").value;
   console.log(selectedScale)
} 
