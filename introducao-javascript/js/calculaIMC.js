//altera titulo do html
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//percorrer todos os paciêntes da lista id="tabela-pacientes"
{
    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
      var peso = pacientes[i].querySelector(".info-peso").textContent;
      var altura = pacientes[i].querySelector(".info-altura").textContent;
      compoeCalculo(peso,altura);

    }
}

function compoeCalculo(peso, altura) {
  var pesoValido = validaPeso(peso);
  var alturaValido = validaAltura(altura);

  if (pesoValido && alturaValido) {
      pacientes[i].querySelector(".info-imc").textContent = calculaIMC(peso,altura);
  }
}

function validaPeso(peso){
  if (peso <= 0 || peso >= 1000) {
    pacientes[i].querySelector(".info-imc").textContent = "Peso inválido";
    pacientes[i].classList.add("paciente-invalido");
    return pesoValido = false;
  }else return pesoValido = true;
}

function validaAltura(altura) {
  if (altura <= 0 || altura > 3.00) {
    pacientes[i].querySelector(".info-imc").textContent = "Altura inválida";
    pacientes[i].classList.add("paciente-invalido");
    return alturaValido = false;
  }else return alturaValido = true
}

function calculaIMC(peso,altura){
    return ((peso/(altura*altura)).toFixed(2));
}
