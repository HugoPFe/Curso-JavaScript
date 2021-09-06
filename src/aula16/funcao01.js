function evenOrOdd(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let number = 2

console.log(`O número ${number} é ${evenOrOdd(number)}.`)