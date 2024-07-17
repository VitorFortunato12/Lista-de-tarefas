const nameLocal = 'key-lista'

function validarTarefa(){
    let values = JSON.parse(localStorage.getItem('key-lista') || "[]")
    let inputValue = document.getElementById('input-tarefa').value
    let existe = values.find(x => x.nome == inputValue)
    return !existe ? false : true
}

function newTarefa(){
    let input = document.getElementById('input-tarefa')
    input.style.border=''

    if(!input.value){
        input.style.border='1px solid red'
        alert('Digite algo para adicionar a sua lista')
    }
    else if (validarTarefa()){
        alert('Ja existe essa tarefa')
    }
    else{
        let values = JSON.parse(localStorage.getItem('key-lista') || "[]")

        values.push({
            nome: input.value
        })
        localStorage.setItem(nameLocal,JSON.stringify(values))
        showTarefas()
    }
     input.value=''
}

function showTarefas(){
    let values = JSON.parse(localStorage.getItem('key-lista') || "[]")
    let lista = document.getElementById('Lista-tarefa')
    
    lista.innerHTML = ``

    for(let i=0; i < values.length; i++){
        lista.innerHTML += `<li>${values[i]['nome']}<button id='btn-ok' onclick='removeTarefa("${values[i]['nome']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg></button></li>`
    }
}

function removeTarefa(data){
    let values = JSON.parse(localStorage.getItem('key-lista') || "[]")

    let index = values.findIndex(x => x.nome == data)

    values.splice(index,1)
    localStorage.setItem(nameLocal,JSON.stringify(values))
    showTarefas()
}
showTarefas()