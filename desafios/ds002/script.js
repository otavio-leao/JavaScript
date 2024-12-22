function verificar() {
    var data = new Date()  
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.valeu) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''  
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')       
        if (fsex[0].checked) {
            genero = 'Homem'
           if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('img', 'manha,jpg')
            } else if (idade < 21) {
                //adoleçente
            } else if (idade < 50) {
                //adulto
            } else if (idade) {
                //velho 
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10 ) {
                //criança
            } else if (idade < 21) {
                //adoleçente
            } else if (idade < 50) {
                //adulto
            } else if (idade) {
                //velho
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}