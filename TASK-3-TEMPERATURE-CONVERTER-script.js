function convertTemp() {

    var temp = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (temp === "") {
        result.innerHTML = "Please enter a temperature value";
        return;
    }

    if (unit === "celsius") {
        var fahrenheit = (temp * 9/5) + 32;
        result.innerHTML = temp + "°C = " + fahrenheit.toFixed(2) + "°F";
    } 
    else {
        var celsius = (temp - 32) * 5/9;
        result.innerHTML = temp + "°F = " + celsius.toFixed(2) + "°C";
    }
}
