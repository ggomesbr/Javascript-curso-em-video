function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var inp_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(inp_ano.value <= 0 || inp_ano.value > ano){
        alert('ERRO: Verifique a data inserida!')
    } else {
        var inp_sex = document.getElementsByName('radsex')
        var idade = ano - inp_ano.value
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (inp_sex[0].checked){
            genero = 'Homem'

            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', 'images/baby-male.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'images/teen-male.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'images/adult-male.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/old-male.png')
            }
        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', 'images/baby-female.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'images/teen-female.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'images/adult-female.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/old-female.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}