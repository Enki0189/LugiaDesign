function operacion(task) {
    if (typeof window !== 'undefined') {
        var primerNum = document.getElementById('primerNumero').value;
        var segundoNum = document.getElementById('segundoNumero').value;
    }
    result = 0;

    if (primerNum == "" || segundoNum == "") {
        alert('Por favor complete ambos campos para continuar');
    } else {
        if (task == 1) {
            result = +primerNum + +segundoNum;
        } else if (task == 2) {
            result = primerNum - segundoNum;
        } else if (task == 3) {
            result = primerNum * segundoNum;
        } else if (task == 4) {
            if (segundoNum == 0) {
                result = 0;
                alert('No es posible dividir por cero');
            } else {
                result = primerNum / segundoNum;
            }
        } else {
            alert('Hubo un error');
        }
    }

    document.getElementById('resultado').value = result;
}