function validaForm()//Para que os comando dentro da função sejam executados, deve ser feita a chamada da função.
{
	var campoNome = document.getElementById('nome');
	var campoSobrenome = document.getElementById('sobrenome');
	var Msg = document.getElementById('Msg');
	

	campoNome.style.border = "";
	campoSobrenome.style.border = "";
	Msg.style.display = "none";
	Msg.innerHTML = "";
	


	if(campoNome.value == ""){
		Msg.classList.remove("alert-success");
		Msg.classList.add("alert-danger");//adiciona a classe dinâmicamente
		campoNome.style.border = "2px solid red";
		Msg.style.display = "block";
		Msg.innerHTML = "Preencha o nome! <br>";
	}


	if(campoSobrenome.value == ""){
		Msg.classList.remove("alert-success");
		Msg.classList.add("alert-danger");
		campoSobrenome.style.border = "2px solid red";
		Msg.style.display = "block";
		Msg.innerHTML += "Preencha o sobrenome!";
	}

	if(campoNome.value != "" && campoSobrenome.value != ""){
		Msg.classList.remove("alert-danger");
		Msg.classList.add("alert-success");
		Msg.style.display = "block";
		Msg.innerHTML = "Os dados foram enviados com sucesso";
		campoNome.value = "";
		campoSobrenome.value = "";
	}

}