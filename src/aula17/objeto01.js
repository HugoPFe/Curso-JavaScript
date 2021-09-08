let amigo = {
    nome: 'Cláudio',
    idade: 45,
    peso: 89.5,
    fazerAniv() {
        this.idade += 1
        console.log(`Feliz aniversário ${this.nome}! Hoje completa ${this.idade} anos.`)
    }
}

console.log(amigo.idade)
amigo.fazerAniv()
