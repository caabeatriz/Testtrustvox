
const btnAdd = document.querySelector("#insert-item_button");

btnAdd.addEventListener("click", function(event){
    event.preventDefault()
    alert("AAAAAAAAA")
    
    const form = document.querySelector("#form_insert-item")
    console.log(form.inputNumber.value)
    console.log(form.selectForm.value)

    const time = form.inputNumber.value
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


    // altera o valor das tds com os input value
    timeTd.textContent = time;
    selectTd.textContent = select;
    dateTd.textContent = date;

    // cria uma linha para cada coluna
    tableTr.appendChild(timeTd)
    tableTr.appendChild(selectTd)
    tableTr.appendChild(dateTd)

   
    // cria uma div para colocar o botao delete e insere ele com inner 
    const btnDeleteTask = document.createElement("div")
    btnDeleteTask.className = "btnDeleteTask"
    btnDeleteTask.innerHTML = ` - `

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


function calcular(){

    var listaTemposExercicios = document.querySelectorAll(".tempo-exercicio"); //Tem que retornar um array com todos os tempos
    
    var totalTempo = 0
    for (elemento of listaTemposExercicios){
        totalTempo += parseInt(elemento.textContent)
    }
    return totalTempo
}

