function contar(){
    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    var resultado = document.querySelector('div#resultado')
    
    if(passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }
    
    if(inicio == '' || fim == '' || passo == ''){
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        
        if(Number(fim) > Number(inicio)){
            // Contagem crescente
            for(var i = Number(inicio); i <= Number(fim); i += Number(passo)){
                resultado.innerHTML += `${i} 👉 `
            }
        } else {
            // Contagem decrescente
            for(var i = Number(inicio); i >= Number(fim); i -= Number(passo)){
                resultado.innerHTML += `${i} 👉 `
            }
        }
        
        resultado.innerHTML += '🚩'
    }
}