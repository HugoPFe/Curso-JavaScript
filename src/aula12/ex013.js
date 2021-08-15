var weekDay = new Date().getDay()
var dayOutput = null

switch (weekDay) {
    case 0:
        dayOutput = 'Domingo'
        break
    case 1:
        dayOutput = 'Segunda-Feira'
        break
    case 2:
        dayOutput = 'Terça-Feira'
        break
    case 3:
        dayOutput = 'Quarta-Feira'
        break
    case 4:
        dayOutput = 'Quinta-Feira'
        break
    case 5:
        dayOutput = 'Sexta-Feira'
        break
    case 6:
        dayOutput = 'Sábado'
        break
    default:
        dayOutput = '[Data inválida!]'
}

console.log(`Hoje é ${dayOutput}`)
