const btnAdd = document.querySelector("#insert-item_button");
btnAdd.addEventListener("click", function(event) {
	event.preventDefault()
    createTable()	
});

function createTable(){
    const form = document.querySelector("#formModality")
	const time = form.inputNumber.value + "h"
	const select = form.selectForm.value
	const date = form.inputDate.value
	const dataLabelModality = document.createElement("tr")
	const timeModality = document.createElement("td")
	const selectModality = document.createElement("td")
    const dateModality = document.createElement("td")
    
    if (inputNumber.value === undefined || inputNumber.value === null || inputNumber.value === "" || inputNumber.value === " ") {
		alert("Insira as horas")
		inputNumber.focus();
		return false;
	} else if (inputDate.value === "__/__/____" || inputDate.value === null || inputDate.value === undefined || inputDate.value === "" || inputDate.value === " ") {
		alert("Insira a data")
		inputDate.focus();
		return false;
	} else if (inputNumber.value > 24 || inputNumber.value < 1) {
		alert('Insira um valor menor que 24 horas e maior que 1 hora')
		inputNumber.focus()
		return false
	}

	timeModality.className = "tempo-exercicio"
	dataLabelModality.className = "tr-cor"
	timeModality.textContent = time;
	selectModality.textContent = select;
	dateModality.textContent = date;
	
	dataLabelModality.appendChild(timeModality)
	dataLabelModality.appendChild(selectModality)
    dataLabelModality.appendChild(dateModality)
    
    const table = document.querySelector("#table-activits")
	table.appendChild(dataLabelModality)

	const resultado = document.querySelector(".resultado")
	resultado.textContent = calcular()
	
    const btnDeleteTask = document.createElement("div")
	btnDeleteTask.className = "btnDeleteTask"
	btnDeleteTask.innerHTML = `x`
	btnDeleteTask.addEventListener("click", function(eventdelete) {
		eventdelete.preventDefault()
		dataLabelModality.remove()
		resultado.textContent = calcular()
	});

	dataLabelModality.appendChild(btnDeleteTask)
}

function calcular() {
	var listaTemposExercicios = document.querySelectorAll(".tempo-exercicio");
	var texto = "hours of exercises"
	var espaco = " "
	var totalTempo = 0

	for (elemento of listaTemposExercicios) {
		totalTempo += parseFloat(elemento.textContent)
	}
	return (totalTempo + espaco + texto)
}

$('#inputDate').val(dataAtualFormatada);
function dataAtualFormatada() {
	var data = new Date(),
		dia = data.getDate().toString().padStart(2, '0'),
		mes = (data.getMonth() + 1).toString().padStart(2, '0'),
		ano = data.getFullYear();
	return dia + "/" + mes + "/" + ano;
}