function avanzaReloj() {
    var momentoActual = new Date();
    var hora = addZero(momentoActual.getHours());
    var minuto = addZero(momentoActual.getMinutes());
    var segundo = addZero(momentoActual.getSeconds());

    var horaAmostrar = hora + " : " + minuto + " : " + segundo;
    
    document.getElementById("clock").textContent = horaAmostrar;

    setTimeout(avanzaReloj, 1000);
}

function addZero(num) {
    return (num < 10) ? "0" + num : num;
  }