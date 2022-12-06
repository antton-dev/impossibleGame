/** made by @antton-dev 
 * https://github.com/antton-dev/impossibleGame
 * free to use for personal use
 * free to edit
 * free to share with credit mention to @antton-dev and with the repos link
 * free to contribute
 * not authorized to sell or having a commercial use of this project
 * 
 * Have Fun and good luck !
 * Thanks
 * @Antton-dev
 */

let level = 0
window.addEventListener('load', function() {
    while (level == 0 || level < 20|| level > 600) {   
        level = prompt('Entrez le niveau de difficulté (nombre entre 20 (très facile) et 600 (extrême) : ')
    }

})


let score = 0
let clickMe = document.querySelector('#clickMe')

let xPos = parseInt(Math.floor(Math.random() * (window.innerWidth-50)))
let yPos = parseInt(Math.floor(Math.random() * (window.innerHeight-50)))

clickMe.style.left = xPos
clickMe.style.top = yPos

clickMe.innerHTML = "Commencer le jeu"

function move(level) {
    if (score >= 0) {
        clickMe.innerHTML = "Try to catch me"
        
    }

    let signeList = ["+", "-"]
    let signeX = Math.floor(Math.random()*2)
    signeX = signeList[signeX]
    let signeY = Math.floor(Math.random()*2)
    signeY = signeList[signeY]
    let randomX = Math.floor(Math.random() * level)
    let randomY = Math.floor(Math.random() * level)
    
    if (xPos - randomX <= 0) {
        signeX = "+"
    }
    
    if (yPos - randomY<= 0) {
        signeY = "+"
    }


    if(yPos + randomY>= window.innerHeight-50) {
        signeY = '-'
    }
    if(xPos + randomX >= window.innerWidth-50) {
        signeX = '-'
    }
    
    if (signeX == "+") {
        xPos = parseInt(xPos + randomX)
        
    } else if(signeX == "-") {
        xPos = parseInt(xPos - randomX)
    } else {
        console.log('error');
    }
    
    if (signeY == "+") {
        yPos = parseInt(yPos + randomY)
        
    } else if(signeY == "-") {
        yPos = parseInt(yPos - randomY)   
    } else {
        console.log('error');
    }

    
    console.log(signeX, signeY);
    console.log(xPos, yPos)
    

    clickMe.style.left = xPos + 'px'
    clickMe.style.top =  yPos + 'px'
    score += 1
    
    document.querySelector('#score').innerHTML = "Ton score : " + score
    
    
}

clickMe.addEventListener('mouseenter', function(){
    move(level)}
)

function success() {
    alert('bravo, tu as déjoué tous mes pièges ! \n Ton score : ' + score)
    score = 0
    document.querySelector('#score').innerHTML = "Ton score : 0"
}

clickMe.addEventListener('click', success)

let helpBtn = document.querySelector('#help')
let helpCloseBtn = document.querySelector('#helpCloseBtn')
let helpBox = document.querySelector('#helpBox')

function helpOpen() {
    helpBox.style.display = 'block'
    helpBtn.style.display = 'none'
}

function helpClose() {
    helpBox.style.display = 'none'
    helpBtn.style.display = 'block'
}

helpBtn.addEventListener('click', helpOpen)
helpCloseBtn.addEventListener('click', helpClose)