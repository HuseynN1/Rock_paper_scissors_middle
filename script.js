const computer = document.querySelector("#computer")
const user = document.querySelector("#user")
const resultdisplay = document.querySelector("#result")
const mumkunolanlar = document.querySelectorAll("button")
let userChoice
let compchc
let result
mumkunolanlar.forEach(element => element.addEventListener('click', (e) => {
    userChoice = e.target.id
    user.innerHTML = userChoice
    compchoice()
    getResult()
}
))
function compchoice() {
    const randomnumber = Math.floor(Math.random() * 3)
    switch (randomnumber) {
        case 0:
            compchc = "rock"
            break
        case 1:
            compchc = "paper"
            break
        case 2:
            compchc = "scissors"
            break
    }
    computer.innerHTML = compchc
}

function getResult() {
    if (compchc===userChoice)
    {result ='it is draft'}
    if(compchc=='rock'&&userChoice=='scissors')
    {result ='you lost !' }
    if(compchc=='rock'&&userChoice=='paper')
    {result ='you win !' }
    if(compchc=='paper'&&userChoice=='scissors')
    {result ='you win !' }
    if(compchc=='paper'&&userChoice=='rock')
    {result ='you lost !' }
    if(compchc=='scissors'&&userChoice=='rock')
    {result ='you win !' }
    if(compchc=='scissors'&&userChoice=='paper')
    {result ='you lost !' }
    resultdisplay.innerHTML=result
}


