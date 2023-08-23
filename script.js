function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
   var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = './imagens/fotomanha.png'
        h2.innerHTML = `Bom Dia!!!`
        document.body.style.background = '#ffab68'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = './imagens/fototarde.png'
        h2.innerHTML = `Boa Tarde!!!`
        document.body.style.background = "#fc8429";
    } else {
        //Boa noite!
        img.src = "./imagens/fotonoite.png";
        h2.innerHTML = `Boa Noite!!!`
        document.body.style.background = "#353242";
    }
        
}
