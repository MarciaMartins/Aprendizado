//altera titulo do html
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//percorrer todos os paciêntes da lista id="tabela-pacientes"
{
    var pacientes = document.querySelectorAll(".paciente");
    //console.log(pacientes);
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = (pacientes[i]);
      //calcula imc dos pacientes
      //var paciente = document.querySelector(pacienteSelecionado);

      var peso = paciente.querySelector(".info-peso").textContent;
      var altura = paciente.querySelector(".info-altura").textContent;

      var pesoValido = true;
      var alturaValido = true;

      if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
      }

      if (altura <= 0 || altura > 3.00) {
        alturaValido = false;
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
      }

      if (pesoValido && alturaValido) {
          paciente.querySelector(".info-imc").textContent = (peso/(altura*altura)).toFixed(2);
      }

      }
}
