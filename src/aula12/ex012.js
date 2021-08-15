var hours = new Date().getHours()

console.log(`Agora são ${hours} horas.`)

if (hours < 12) {
    console.log('Bom dia!')
} else if (hours < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 
