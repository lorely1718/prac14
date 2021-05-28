function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var CONV = function (n1){ 

	var numero1 = parseInt(document.getElementById("Centimetros").value);

	var resultado = numero1 * .39;

	return resultado;

	}