// Global variables
var result; // Skapa variabeln, den definieras i init och kan därefter användas.


// Init function (when document is loaded)
function init() {
	result = document.getElementById("printedResult");
} // End init
window.onload = init;

function calculateSalary() {
	var allHours, baseSalaryPerHour, taxVariable, finalSalary;
	allHours = Number(document.getElementById("text-input-timmar(1)").value)
	+ Number(document.getElementById("text-input-timmar(2)").value)
	+ Number(document.getElementById("text-input-timmar(3)").value)
	+ Number(document.getElementById("text-input-timmar(4)").value)
	+ Number(document.getElementById("text-input-timmar(5)").value)
	+ Number(document.getElementById("text-input-timmar(6)").value)
	+ Number(document.getElementById("text-input-timmar(7)").value)
	+ Number(document.getElementById("text-input-timmar(8)").value)
	+ Number(document.getElementById("text-input-timmar(9)").value)
	+ Number(document.getElementById("text-input-timmar(10)").value)
	+ Number(document.getElementById("text-input-timmar(11)").value)
	+ Number(document.getElementById("text-input-timmar(12)").value)
	+ Number(document.getElementById("text-input-timmar(13)").value)
	+ Number(document.getElementById("text-input-timmar(14)").value)
	+ Number(document.getElementById("text-input-timmar(15)").value)
	+ Number(document.getElementById("text-input-timmar(16)").value)
	+ Number(document.getElementById("text-input-timmar(17)").value)
	+ Number(document.getElementById("text-input-timmar(18)").value)
	+ Number(document.getElementById("text-input-timmar(19)").value)
	+ Number(document.getElementById("text-input-timmar(20)").value)
	+ Number(document.getElementById("text-input-timmar(21)").value)
	+ Number(document.getElementById("text-input-timmar(22)").value)
	+ Number(document.getElementById("text-input-timmar(23)").value)
	+ Number(document.getElementById("text-input-timmar(24)").value)
	+ Number(document.getElementById("text-input-timmar(25)").value)
	+ Number(document.getElementById("text-input-timmar(26)").value)
	+ Number(document.getElementById("text-input-timmar(27)").value)
	+ Number(document.getElementById("text-input-timmar(28)").value)
	+ Number(document.getElementById("text-input-timmar(29)").value)
	+ Number(document.getElementById("text-input-timmar(30)").value)
	+ Number(document.getElementById("text-input-timmar(31)").value)
	;

	baseSalaryPerHour = (document.getElementById("text-input-base-salary").value / 160);
	taxVariable = 0.74 //26% skatt
	finalSalary = (baseSalaryPerHour * allHours) * taxVariable;

	// Testar så att båda textfälten ges siffror från användaren
	if (isNaN(allHours) || isNaN(baseSalaryPerHour)) {
		result.innerHTML = "Du måste ange endast siffror";
	} else {
		result.innerHTML = "Totalt antal timmar den här månaden: " + allHours + "<br />";
		result.innerHTML += "Dagslön före skatt: " + baseSalaryPerHour + "<br />";
		result.innerHTML += "Slutlön efter skatt: " + finalSalary + "<br />"; 
	}

} // End calculateSalary
/*
function resetAll() {
	result.innerHTML = "";
}
*/

