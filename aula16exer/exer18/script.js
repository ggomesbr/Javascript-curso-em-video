let array = []

function isValid(entrada){
    if(entrada >=1 && entrada <= 100){
        return true
    }
    alert('Valor inválido!')
    return false
}

function inArray(entrada){
    for(let i = 0; i < array.length; i++){
        if(entrada == array[i]){
            alert('Valor já adicionado à lista!')
            return true
        }
    }

    return false
}

function adicionar(){
    let entrada = document.querySelector('input#txtnum')
    let lista = document.querySelector('select#selAdicionados')
    let resultado = document.querySelector('div#resultado')
    let numero = Number(entrada.value)

    if(isValid(numero) && !inArray(numero)){
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        lista.appendChild(item)
        array.push(numero)
    }

    entrada.value = ''
    entrada.focus()
    resultado.innerHTML = ''
}

function somaArray(){
    let res = 0
    for(let i = 0; i < array.length; i++){
        res += array[i]
    }
    return res
}

function imprimirResultado(){
    let div_resultado = document.querySelector('div#resultado')

    if(array.length == 0){
        alert('Adicione valores antes de finalizar!')
        return
    }
    
    array.sort((a, b) => a - b)
    div_resultado.innerHTML = `Ao todo, temos ${array.length} elementos cadastrados.<br>`
    div_resultado.innerHTML += `O maior valor informado foi ${array[array.length - 1]}.<br>`
    div_resultado.innerHTML += `O menor valor informado foi ${array[0]}.<br>`
    div_resultado.innerHTML += `Somando todos os valores, temos ${somaArray()}.<br>`
    div_resultado.innerHTML += `A média dos valores digitados é ${somaArray() / array.length}.<br>`
    
    console.log(array[array.length - 1])
    console.log(array)
    console.log(somaArray())

}