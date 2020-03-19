//altera titulo do html
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//calcula imc dos pacientes
{
  var paciente = document.querySelector("#primeiro_paciente");
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  var pesoValido = true;
  var alturaValido = true;

  if (peso <= 0 || peso > 1000) {
    console.log("Peso inválido");
    pesoValido = false;
  }

  if (altura <= 0 || altura > 3,00) {
    console.log("Altura inválida");
    alturaValido = false;
  }

  if (pesoValido && alturaValido) {
    paciente.querySelector(".info-imc").textContent = peso/(altura*altura);
  }




}
