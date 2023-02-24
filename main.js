function tabuada() {
    var numero = document.getElementById('numero').value
    var tab = document.getElementById('tabuada')

    if (numero.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(numero)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var lista = document.createElement('option')
            lista.text = `${n} X ${c} = ${n*c}`
            lista.value = `tab ${c}`
            tab.appendChild(lista)
        }
    }
}