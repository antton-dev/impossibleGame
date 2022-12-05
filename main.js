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

 if(window.matchMedia("(pointer: coarse)").matches) {
    document.querySelector('main').style.display = "none"
    document.querySelector('body').innerHTML = '<p>ImpossibleGame n\' est pas (encore) jouable sur écran tactile, désolé.</p>'
}

let clickMe = document.querySelector('#clickMe')
function move() {
    
    let xPos = Math.floor(Math.random() * (window.innerWidth-50));
    let yPos = Math.floor(Math.random() * (window.innerHeight-50));
    console.log(xPos, yPos)
    clickMe.style.left = xPos + 'px'
    clickMe.style.top = yPos + 'px'
    
}

clickMe.addEventListener('mouseenter', move)

function success() {
    alert('bravo, tu as déjoué tous mes pièges !')
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