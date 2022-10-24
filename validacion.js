document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validar); 
  })
  
  function validar(evento) {
    evento.preventDefault()
    var Nombre = document.getElementById('name').value
    if(Nombre.length == null || Nombre.length < 5 || /^\s+$/.test(Nombre)) {
      alert('No has escrito tu nombre')
      return
    }

    var Mail = document.getElementById('email').value
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(Mail))) {
      alert('El e-mail no es válido')
      return
    }
    
    var Numtel = document.getElementById('tel').value
    if (Numtel.length < 10) {
      alert('Ingresa un teléfono válido')
      return
    }

    this.submit()
  }
