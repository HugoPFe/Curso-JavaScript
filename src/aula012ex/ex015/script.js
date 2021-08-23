function identifyAge() {
    var currentYear = new Date().getFullYear()
    
    var txtBirthYear = document.getElementById('year').value
    var birthYear = Number(txtBirthYear)
    var age = currentYear - birthYear    

    if (birthYear <= 0 || age < 0) {
        alert('Ano inválido! Por favor insira um ano válido.')
        return
    }
    
    var txtGenre = document.getElementsByName('genreinp')
    var resultArea = document.getElementById('res')
    var resultImg = document.getElementById('image')
    var imgPath = null
    var img = null
    
    if (txtGenre[0].checked) {
        var genre = 'Homem'
    } else {
        var genre = 'Mulher'
    }
    
    if (genre === 'Homem') {
        if (age < 12) {
            img = 'homembebe'
        } else if (age < 20) {
            img = 'homemjovem'
        } else if (age < 60) {
            img = 'homemadulto'
        } else {
            img = 'homemidoso'
        }
    } else if (genre === 'Mulher') {
        if (age < 12) {
            img = 'mulherbebe'
        } else if (age < 20) {
            img = 'mulherjovem'
        } else if (age < 60) {
            img = 'mulheradulta'
        } else {
            img = 'mulheridosa'
        }

    }
    
    imgPath = 'images/' + img + '.png'
    
    resultArea.innerHTML = `${genre}, ${age} anos`
    resultImg.src = imgPath
    resultImg.hidden = false
    
}