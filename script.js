function carregar() {
  var img = window.document.getElementById('imagem')

  var msg = window.document.getElementById('msg')
  var data = new Date()
  //var hora = data.getHours()
  var hora =8
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 00 && hora <= 12) {
    img.src ='imagem/manha2-removebg-preview.png'
} else if (hora >= 13 && hora < 18) {
    img.src ='imagem/tarde2-removebg-preview.png'
  } else {
    img.src ='imagem/noite2.png'
  }
}