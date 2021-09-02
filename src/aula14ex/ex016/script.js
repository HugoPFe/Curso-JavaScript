function count() {
    let start = Number(document.getElementById('inputStart').value)
    let end = Number(document.getElementById('inputEnd').value)
    let step = Number(document.getElementById('inputStep').value)
    
    if (start === 0) {
        document.getElementById('inputStart').value = '0'
    }
    
    if (end === 0) {
        document.getElementById('inputEnd').value = '0'
    }
    
    if (step < 1) {
        alert('O passo deve ser 1 ou mais!')
        return
    }
    
    let divRes = document.getElementById('res')
    let outputPar = document.createElement('p')

    if (divRes.childElementCount > 0) {
        divRes.removeChild(divRes.firstChild)
    }

    divRes.appendChild(outputPar)

    if (start < end) {
        for (let c = start; c <= end; c+=step) {
            outputPar.innerHTML += `${c} \u{1F449} `
        }
    } else {
        for (let c = start; c >= end; c-=step) {
            outputPar.innerHTML += `${c} \u{1F449} `
        }
    }
        
    outputPar.innerHTML += '&#x1F3C1'
}