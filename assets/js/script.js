
//var campoNome = document.querySelector('#nome');
//var campoSobrenome = document.querySelector('#sobrenome');
//var campoTelefone = document.querySelector('#cel');
var meusCampos = document.getElementsByTagName('input');
var campoOperadora = document.querySelector('#operadora');
var alerta = document.querySelector('#Msg');
var ehSucesso = true;


//Funções para validar o campo de Telefone

var meuObjeto;
var minhaFunção;

//------------------- Máscara para Telefone ---------------------------------
function mascara(obj, func){
	meuObjeto = obj;
	minhaFunção = func;

	setTimeout("executaMinhaFunção()",1)

	//if(this.value.length > this.maxlenght){
		//this.value = this.value.slice(0, this.maxlenght);
	///}
}

function executaMinhaFunção(){
	meuObjeto.value = minhaFunção(meuObjeto.value); //Neste ponto, o objeto receberá o valor formatado pela função de validação
}

function mascaraCelular(digito){
	digito = digito.replace(/\D/g,""); // \D --> Pesquisa o que não é digito e troca por "" --> o 'g' serve para procurar todas as ocorrências 
	digito = digito.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos 
    digito = digito.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return digito ;
}

//----------- Validação dos Formulários ----------

function validaForm(){
	//console.log(3+4);

	limpaValidacao();
	ehSucesso = true;

	//validaCampo(campoNome, "nome");
	//validaCampo(campoSobrenome, "sobrenome");
	//validaCampo(campoTelefone, "telefone");
	for(var i=0; i<meusCampos.length;i++){
		validaCampo(meusCampos[i], meusCampos[i].id);
	}

	validaCampo(campoOperadora, "operadora");
	
	if(ehSucesso){
		alerta.classList.add('alert-success');
		alerta.style.display = "block";
		alerta.innerHTML = "Dados enviados com sucesso!";
		for(var i=0;i<meusCampos.length;i++){
			meusCampos[i].value = "";
		}
		campoOperadora.value = "";
	}
}




function validaCampo(campo, nomeDoCampo){

	if(campo.value == ""){
		alerta.style.display = "block";
		alerta.classList.add('alert-danger');
		alerta.innerHTML += "Preencha o(a) " + nomeDoCampo + "<br>"//textContent;
		campo.style.border = "solid 2px red";
		ehSucesso = false;
	}
}

function limpaValidacao(){
	
	for(var i=0;i<meusCampos.length;i++){
		meusCampos[i].style.border = "";
	}
	campoOperadora.style.border = "";

	//campoNome.style.border = "";
	//campoSobrenome.style.border = "";

	alerta.innerHTML = "";
	alerta.style.display = "none";
	alerta.classList.remove('alert-danger', 'alert-success');
}

//var meus_inputs = document.getElementsByTagName('input');

	//for(var i=0;i<meus_inputs.length;i++){
	//	meus_inputs[i].style.border = "";
	//}

