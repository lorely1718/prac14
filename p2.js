function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var Mayor = function (n1, n2, n3){ 

	var numero1 = parseInt(document.getElementById("numero 1").value);
	var numero2 = parseInt(document.getElementById("numero 2").value);
	var numero3 = parseInt(document.getElementById("numero 3").value);

	var resultado = Math.min (numero1, numero2, numero3)

	return resultado;
	 }