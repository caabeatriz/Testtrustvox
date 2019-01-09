
const btnAdd = document.querySelector("#insert-item_button");

btnAdd.addEventListener("click", function (event) {
    event.preventDefault()  
    const form = document.querySelector("#form_insert-item")
    console.log(form.inputNumber.value)
    console.log(form.selectForm.value)

    const time = form.inputNumber.value + "h"
    const select = form.selectForm.value
    const date = form.inputDate.value

    // cria a linha
    const tableTr = document.createElement("tr")

    // cria as colunas
    const timeTd = document.createElement("td")
    const selectTd = document.createElement("td")
    const dateTd = document.createElement("td")

    //**Adiciona uma classe ao que vc quer recuperar depois
    timeTd.className = "tempo-exercicio"
    tableTr.className = "tr-cor"

    // altera o valor das tds com os input value
    timeTd.textContent = time;
    selectTd.textContent = select;
    dateTd.textContent = date;

    // cria uma linha para cada coluna
    tableTr.appendChild(timeTd)
    tableTr.appendChild(selectTd)
    tableTr.appendChild(dateTd)

    // validação dos campos
    if (inputNumber.value === undefined || inputNumber.value === null || inputNumber.value === "" || inputNumber.value === " " ) {
        alert("Insira as horas")
        inputNumber.focus();
        return false;
    }else if (inputDate.value === "__/__/____" || inputDate.value === null || inputDate.value === undefined || inputDate.value === "" || inputDate.value === " "){
        alert("Insira a data") 
        inputDate.focus();
        return false;
    }else if (inputNumber.value > 24 || inputNumber.value < 1){
        alert('Insira um valor menor que 24 horas e maior que 1 hora')
        inputNumber.focus()
        return false
    } 

    // cria uma div para colocar o botao delete e insere ele com inner 
    const btnDeleteTask = document.createElement("div")
    btnDeleteTask.className = "btnDeleteTask"
    btnDeleteTask.innerHTML = `x`

    //Botao excluir tarefas 
    btnDeleteTask.addEventListener("click", function (eventdelete) {
        eventdelete.preventDefault()
        tableTr.remove()
        resultado.textContent = calcular()
    })

    tableTr.appendChild(btnDeleteTask)   
    const table = document.querySelector("#table-activits")
    table.appendChild(tableTr)

    var resultado = document.querySelector(".resultado")
    resultado.textContent = calcular()

})

function calcular() {

    var listaTemposExercicios = document.querySelectorAll(".tempo-exercicio"); //Tem que retornar um array com todos os tempos
    var texto = "hous of exercises"
    var espaco = " "
    var totalTempo = 0

    for (elemento of listaTemposExercicios) {
        totalTempo += parseFloat(elemento.textContent)
    }

    return (totalTempo + espaco + texto)
}

// formatar data para data Brasil
$('#inputDate').val(dataAtualFormatada);
function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), 
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}


