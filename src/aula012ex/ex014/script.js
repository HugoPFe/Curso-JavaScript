function load() {
    var hourSpan = document.getElementById('hourspan')
    var img = document.getElementById('img')
    var hourMsg = document.getElementById('hourmsg')
    var body = document.querySelector('body')

    var imgFile = null
    var bodyColor = null
    var msg = null

    var date = new Date()
    var dayHour = date.getHours()
    var dayMinutes = () => {
        var minutes = date.getMinutes()
        if (minutes < 10) {
            minutes = '0' + String(minutes)
        }
        return minutes
    }

    if (dayHour < 12) {
        msg = 'Bom dia!'
        imgFile = 'fotomanha.png'
        bodyColor = '#EDD1AD'
    } else if (dayHour < 18) {
        msg = 'Boa tarde!'
        imgFile = 'fototarde.png'
        bodyColor = '#F6AC74'
    } else {
        msg = 'Boa noite!'
        imgFile = 'fotonoite.png'
        bodyColor = '#033C95'

        document.querySelector('footer').style.color = 'white'
        document.querySelector('a').style.color = '#c0d9ff'
    }

    hourSpan.innerHTML = `${dayHour}:${dayMinutes()}`
    img.src = './images/' + imgFile
    hourMsg.innerHTML = msg
    body.style.backgroundColor = bodyColor
}