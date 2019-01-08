
const btnAdd = document.querySelector("#insert-item_button");
const date = document.querySelector("#inputDate")


date.addEventListener("focus", function (event) {
    date.value = "__/__/____"
    setTimeout(function () {
        date.setSelectionRange(0, 0)
    }, 1)
})


date.addEventListener("keydown", function(event) {
    event.preventDefault()
    if("0123456789".indexOf(event.key) !== -1
        && this.value.indexOf("_") !== -1) {
            this.value = this.value.replace(/_/, event.key)
            const next_index = this.value.indexOf("_")
            this.setSelectionRange(next_index, next_index)
    } else if (event.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)
    }
})



btnAdd.addEventListener("click", function (event) {



    event.preventDefault()
   

    
    const form = document.querySelector("#form_insert-item")


    console.log(form.inputNumber.value)
    console.log(form.selectForm.value)

    const time = form.inputNumber.value + "h"
    const select = form.selectForm.value
    const date = form.inputDate.value

    // criei a linha
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
    if (inputNumber.value === undefined || inputNumber.value === null || inputNumber.value === "" || inputNumber.value === " ") {
        alert("Insira as horas")
        inputNumber.focus();
        return false;
    }else if (inputDate.value === "__/__/____" || inputDate.value === null || inputDate.value === undefined || inputDate.value === "" || inputDate.value === " "){
        alert("Insira a data") 
        inputDate.focus();
        return false;
    }



    // validação da data




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
        totalTempo += parseInt(elemento.textContent)
    }


    return (totalTempo + espaco + texto)
}

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  function storage1 (){
 
    const form = document.querySelector("#form_insert-item")


    console.log(form.inputNumber.value)
    console.log(form.selectForm.value)

    const time = form.inputNumber.value + "h"
    if(typeof(Storage) !== "undefined"){
        if (form.inputNumber.value){
            console.log(aaa)
        }
    }

  }