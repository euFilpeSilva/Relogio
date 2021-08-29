function carregar() {
  var img = window.document.getElementById('imagem')

  var msg = window.document.getElementById('msg')


  function intervalo() {
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const milisegundos = data.getMilliseconds()

    if (hora >= 00 && hora <= 12) {
      img.src = 'imagem/manha.jpg'
    } else if (hora >= 13 && hora < 18) {
      img.src = 'imagem/tarde.png'
    } else {
      img.src = 'imagem/noite.png'
    }
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}:${milisegundos}`
  }
  setInterval(intervalo, 1)

  
}
