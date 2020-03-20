//"escutar" eventos no botão 'Adicionar'

var botaoAdicionar =document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
  event.preventDefault();
  //adicionar os dados do paciente a tabela
  //pegar as informações do formulario
  var form = document.querySelector("#form-adicionaPaciente");
  var paciente = extraindoPacienteFormulario(form);
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacienteTr);
  form.reset();


});

function extraindoPacienteFormulario(form){
  //criar um objeto e extrair as informações do formulario
  var paciente = {
     nome : form.nome.value,
     peso : form.peso.value,
     altura : form.altura.value,
     gordura : form.gordura.value,
     imc : calculaIMC(peso, altura)
  }
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "infor-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}
