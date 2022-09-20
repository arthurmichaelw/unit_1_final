class Tile {
    constructor(sp, ep) {
        this.length = 100;
        this.startPoint = sp;
        this.endPoint = ep;
    }
} 

const snakesAndLadders = [
    new Tile(2, 14),
    new Tile(9, 31),
    new Tile(21, 42),
    new Tile(28, 76),
    new Tile(51, 67),
    new Tile(71, 91),
    new Tile(17, 7),
    new Tile(54, 35),
    new Tile(62, 19),
    new Tile(64, 60),
    new Tile(87, 24),
    new Tile(93, 73),
    new Tile(98, 79)
]

class Players {
    constructor() {
        this.spot = 1;
        this.next = 0;
    }

    roll() {
        let r = Math.floor(Math.random() * 6) + 1;
        this.next = (this.spot + r);
        console.log('roll', r)
        // document.getElementById(`${this.spot}`).innerText = ' '
        // document.getElementById(`${this.next}`).textContent = '◉'
        // this.spot = this.next
        if(snakesAndLadders[0].startPoint === this.spot){
            this.next = snakesAndLadders[0].endPoint
            document.getElementById(`${this.spot}`).innerText = '?'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[1].startPoint === this.spot){
            this.next = snakesAndLadders[1].endPoint
            document.getElementById(`${this.spot}`).innerText = '?'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[2].startPoint === this.spot){
            this.next = snakesAndLadders[2].endPoint
            document.getElementById(`${this.spot}`).innerText = '?'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[3].startPoint === this.spot){
            this.next = snakesAndLadders[3].endPoint
            document.getElementById(`${this.spot}`).innerText = '?'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[4].startPoint === this.spot){
            this.next = snakesAndLadders[4].endPoint
            document.getElementById(`${this.spot}`).innerText = '?'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[5].startPoint === this.spot){
            this.next = snakesAndLadders[5].endPoint
            document.getElementById(`${this.spot}`).innerText = '?'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[6].startPoint === this.spot){
            this.next = snakesAndLadders[6].endPoint
            document.getElementById(`${this.spot}`).innerText = '!'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[7].startPoint === this.spot){
            this.next = snakesAndLadders[7].endPoint
            document.getElementById(`${this.spot}`).innerText = '!'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[8].startPoint === this.spot){
            this.next = snakesAndLadders[9].endPoint
            document.getElementById(`${this.spot}`).innerText = '!'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[10].startPoint === this.spot){
            this.next = snakesAndLadders[10].endPoint
            document.getElementById(`${this.spot}`).innerText = '!'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[11].startPoint === this.spot){
            this.next = snakesAndLadders[11].endPoint
            document.getElementById(`${this.spot}`).innerText = '!'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next
        } else if(snakesAndLadders[12].startPoint === this.spot){
            this.next = snakesAndLadders[12].endPoint
            document.getElementById(`${this.spot}`).innerText = '!'
            document.getElementById(`${this.next}`).textContent = '◉'
            this.spot = this.next 
        } else {
        document.getElementById(`${this.spot}`).innerText = ' '
        document.getElementById(`${this.next}`).textContent = '◉'
        this.spot = this.next
        }
    }
}

let tiles = new Tile();
let player = new Players();

function renderGame() {
    player.roll()
    console.log('position', player.spot)
    console.log('next spot', player.next)

    if(player.spot >= tiles.length) {
        console.log("game over")
        // document.body.appendChild(gameOver)
        gameOverModal.style.display = "block";
    }
}

const instructionModal = document.querySelector("#instructions")
const closeInstrModalBtn = document.querySelector("#closeModal")
        
const diceRollBtn = document.querySelector("#dice-roll-btn")
const diceModal = document.getElementById("side")

const gameOverModal = document.querySelector("#game-over")
const refreshPageBtn = document.querySelector("#gameOverBtn")

const gameBox = document.getElementById("play-box")

const openInstrModal = (evt) => {
    instructionModal.style.display = "block";
}
        
const closeInstrModal = (evt) => {
    instructionModal.style.display = "none";
    diceModal.style.opacity = 1;
    gameBox.style.opacity = 1;
}

//Event Listeners

setTimeout(openInstrModal, 1400)

closeInstrModalBtn.addEventListener("click", closeInstrModal)

document.addEventListener('keydown',(evt) => {
    // console.log(evt)
    if(evt.keyCode =='83'){
        let diceNum = renderGame()
    }
})

diceRollBtn.addEventListener('click', (evt) => {
        renderGame()
    }
)

refreshPageBtn.addEventListener("click", (evt) => {
    location.reload()})