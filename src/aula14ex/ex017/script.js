function  getById(id) {
    return document.getElementById(id)
}

function calculate() {
    let inputNumber = getById('inptNumber')
    let number = Number(inputNumber.value)
    let selectNumbers = getById('slctNums')

    selectNumbers.innerHTML = ''
    
    for (let n = 0; n <= 10; n++) {
        let multi = document.createElement('option')
        multi.text = `${number} x ${n} = ${number*n}`
        multi.value = `n${n}`
        selectNumbers.add(multi)
    }
}