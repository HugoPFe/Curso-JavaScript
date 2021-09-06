var numbers = []

let divNumbers = document.getElementById('numberAnalyzing')


function addValue() {
    divNumbers.innerHTML = ''
    
    let inptNumber = document.getElementById('inputNumber')
    let number = Number(inptNumber.value)

    if (!(0 < number && number <= 100)) {
        alert('Por favor, digite um número entre 0 e 100!')
        return
    } else if (numbers.includes(number)) {
        alert('Valor já adicionado à lista!')
        return
    }
    
    let slctNumbers = document.getElementById('selectNumbers')
    let optValue = document.createElement('option')

    numbers.push(number)
    optValue.text = `Valor ${number} adicionado à lista.`
    optValue.value = `v${numbers.length}`
    slctNumbers.add(optValue)
}

function analyze() {
    if (numbers.length == 0) {
        alert('Adicione valores à lista!')
        return
    }
        
    let phaQuantity = document.createElement('p')
    phaQuantity.innerHTML = `Ao todo, temos ${numbers.length}  valores cadastrados.`
    
    let phaMax = document.createElement('p')
    phaMax.innerHTML = `O maior valor registrado é ${numbers.reduce(function (v1, v2) {return Math.max(v1, v2)})}`

    let phaMin = document.createElement('p')
    phaMin.innerHTML = `O menor valor registrado é ${numbers.reduce(function (v1, v2) {return Math.min(v1, v2)})}`

    let sum = 0
    numbers.forEach((v) => sum += v)
    let phaSum = document.createElement('p')
    phaSum.innerHTML = `A soma entre os valores é ${sum}`
    
    let average = sum/numbers.length
    let phaAv = document.createElement('p')
    phaAv.innerHTML = `A média é ${average}`
    
    divNumbers.appendChild(phaQuantity)
    divNumbers.appendChild(phaMax)
    divNumbers.appendChild(phaMin)
    divNumbers.appendChild(phaMin)
    divNumbers.appendChild(phaSum)
    divNumbers.appendChild(phaAv)
}