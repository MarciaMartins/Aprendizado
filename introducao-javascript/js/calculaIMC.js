//altera titulo do html
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//percorrer todos os paciêntes da lista id="tabela-pacientes"
{
    var pacientes = document.querySelectorAll(".paciente");
    console.log(pacientes.length);
    for (var i = 0; i < pacientes.length; i++) {
      var peso = pacientes[i].querySelector(".info-peso").textContent;
      var altura = pacientes[i].querySelector(".info-altura").textContent;
      //validação do peso atraves da função
      var pesoValido = validaPeso(peso);//true ou false
     //valida altura atraves da função
      var alturaValido = validaAltura(altura);
      //condição invalida do peso
      if(!pesoValido){
        atribuiCaracteristicasNegativas("Peso Inválido");
      }
      //condição invalida da altura
      if (!alturaValido){
        atribuiCaracteristicasNegativas("Altura Inválido");
      }
      if(pesoValido && alturaValido) {
          pacientes[i].querySelector(".info-imc").textContent = calculaIMC(peso,altura);
      }
    }
}

function compoeCalculo(peso, altura) {
  //validação do peso atraves da função
  var pesoValido = validaPeso(peso);//true ou false
 //valida altura atraves da função
  var alturaValido = validaAltura(altura);
  //condição invalida do peso
  if(!pesoValido){
    atribuiCaracteristicasNegativas("Peso Inválido");
  }
  //condição invalida da altura
  if (!alturaValido){
    atribuiCaracteristicasNegativas("Altura Inválido");
  }
  if(pesoValido && alturaValido) {
      pacientes[i].querySelector(".info-imc").textContent = calculaIMC(peso,altura);
  }
}

function atribuiCaracteristicasNegativas(mensagem){
    pacientes[i].querySelector(".info-imc").textContent = mensagem;
    pacientes[i].classList.add("paciente-invalido");
}

//funcção de validação de peso
function validaPeso(peso) {
  if(peso >= 0 && peso <= 1000){
    return true;
  }else return false;
}

//função de validação da altura
function validaAltura(altura) {
  if (altura >= 0 && altura<=3.00){
    return true;
  }else return false;
}

function calculaIMC(peso,altura){
  var calculo = ((peso/(altura*altura)).toFixed(2));
  return calculo;
}
