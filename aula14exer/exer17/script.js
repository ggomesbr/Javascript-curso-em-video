function gerarTabuada(){
    var inp_numero = document.querySelector('input#txtnumero')
    var tabela = document.querySelector('select#tabela')
    var res = 0
    
    if(inp_numero.value.length == 0){
        alert('Digite um número!')
    } else {
        let numero = Number(inp_numero.value)
        tabela.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            item.value = `option${i}`
            tabela.appendChild(item)
        }
    }

    
}