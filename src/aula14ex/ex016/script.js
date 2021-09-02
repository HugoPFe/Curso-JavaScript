function count() {
    var start = Number(document.getElementById('inputStart').value)
    var end = Number(document.getElementById('inputEnd').value)
    var step = Number(document.getElementById('inputStep').value)

    var divRes = document.getElementById('res')
    var outputPar = document.createElement('p')

    if (divRes.childElementCount > 0) {
        divRes.removeChild(divRes.firstChild)
    }

    divRes.appendChild(outputPar)

    for (var c = start; c <= end; c+=step) {
        outputPar.innerHTML += `${c} &#x1F449 `
    }

    outputPar.innerHTML += '&#x1F3C1'
}