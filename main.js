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
let score = 0
let clickMe = document.querySelector('#clickMe')

let xPos = clickMe.style.left
let yPos = clickMe.style.top

function move(level) {
    
    // let xPos = Math.floor(Math.random() * (window.innerWidth-50));
    // let yPos = Math.floor(Math.random() * (window.innerHeight-50));
    let signeList = ["+", "-"]
    let signeX = Math.floor(Math.random()*2)
    signeX = signeList[signeX]
    let signeY = Math.floor(Math.random()*2)
    signeY = signeList[signeY]
    

    xPos = parseInt(xPos + Math.floor(Math.random() * level))
    yPos = parseInt(yPos + Math.floor(Math.random() * level))
    console.log(signeX, signeY);
    console.log(xPos, yPos)
    clickMe.style.left = signeX + xPos + 'px'
    clickMe.style.top = signeY + yPos + 'px'
    score += 1
    document.querySelector('#score').innerHTML = "Ton score : " + score
    
    
}

clickMe.addEventListener('mouseenter', function(){
    move(20)}
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