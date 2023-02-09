var hora = new Date().getHours()
var saudation
var imageTime
const msg = document.getElementById('msg')
const image = document.getElementById('image')
const age = document.getElementById("age")
var bg
var genre = genreType


function loadTime() {

    if (hora >= 0 && hora < 5) {
        saudation = "Boa noite!"
        imageTime = 'images/noite.png'
        bg = '#00024f'
    } else if (hora >= 5 && hora < 12) {
        saudation = "Bom dia!"
        imageTime = 'images/manha.png'
        bg = '#d3a071'
    } else if (hora >= 12 && hora < 18) {
        saudation = "Boa tarde"
        imageTime = 'images/tarde.png'
        bg = '#fd7021'
    } else {
        saudation = "Boa noite!"
        imageTime = 'images/noite.png'
        bg = '#00024f'
    }
    msg.innerHTML = saudation
    image.src = imageTime
    document.body.style.backgroundColor = bg
    document.getElementById("doit").style.backgroundColor = bg
}



function genreType(genero) {
    genre = genero
    console.log(genre)
    return genre
    
}

function disableButton() {
    let yearField = document.getElementById("myage")
    let nameField = document.getElementById("name")
    let submit = document.getElementById("doit")

    if (yearField.value == "" || nameField.value == "" || typeof genre != "string") {

        document.getElementById("doit").disabled = true
        document.getElementById("age").innerHTML = "Preencha os campos para habilitar o botão!"
        yearField.style.border = "1px solid red"
        nameField.style.border = "1px solid red"
              
    } else {enableButton()}
    
}

function enableButton() {
    let yearField = document.getElementById("myage")
    let nameField = document.getElementById("name")
    let submit = document.getElementById("doit")
        document.getElementById("doit").disabled = false
        document.getElementById("age").innerHTML = ""
        yearField.style.border = ""
        nameField.style.border = ""

    }
    


function calcMyAge() {
    let myAge = document.getElementById("myage").value

    let name = document.getElementById("name").value
    console.log(genre);

    if (myAge < new Date().getFullYear()) {
        myAge = new Date().getFullYear() - myAge

         if (genre == "Masculino") {
            genre = "senhor"
         } else if (genre == "Feminino") {
            genre = "senhora"
         }

        document.getElementById("age").innerHTML = `Olá, ${genre} ${name}, você tem ${myAge} anos!`
    } else {alert('Digite um ano válido')}
}



