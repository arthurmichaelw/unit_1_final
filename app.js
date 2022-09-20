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
    new Tile(54, 34),
    new Tile(62, 19),
    new Tile(64, 60),
    new Tile(87, 24),
    new Tile(93, 73),
    new Tile(98, 78)
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
        // console.log('position', this.spot)
        // console.log(this.next)
        // document.getElementById(`${this.spot}`).innerText = ' '
        // console.log(document.getElementById(`${this.spot}`))
        // document.getElementById(`${this.next}`).textContent = '◉'
        // this.spot = this.next
        // if(snakesandladders.startPoint == this.spot){
        //     this.next = snakesandladders.endPoint
        // }
    }
    resetPlayer() {
        this.spot = 1;
        this.next = 0;
    }
}

let tiles = new Tile();
let player = new Players();

const gameOver = document.createElement('div');
gameOver.setAttribute("class", "modal")
gameOver.textContent = "Congrats you've won! Refresh the page to play again!";

console.log('snakes & ladders', snakesAndLadders[1].startPoint, snakesAndLadders[1].endPoint)

function renderGame() {
    player.roll()
    console.log('position', player.spot)
    console.log('next spot', player.next)
    if(snakesAndLadders[1].startPoint === player.spot){
        player.next = snakesAndLadders[1].endPoint
        document.getElementById(`${player.spot}`).innerText = ' '
        document.getElementById(`${player.next}`).textContent = '◉'
        player.spot = player.next
    } else {
        document.getElementById(`${player.spot}`).innerText = ' '
        document.getElementById(`${player.next}`).textContent = '◉'
        player.spot = player.next
    }
    // document.getElementById(`${player.spot}`).innerText = ' '
    // console.log(document.getElementById(`${player.spot}`))
    // document.getElementById(`${player.next}`).textContent = '◉'
    // player.spot = player.next

    if(player.spot >= tiles.length) {
        console.log("game over")
        document.body.appendChild(gameOver)
        gameOver.style.display = 'block';
    }

    // if(snakesAndLadders.startPoint === player.spot){
    //     player.next = snakesAndLadders.endPoint
    // } else {
    //     player.spot = player.next
    // }
}

const instructionModal = document.querySelector(".modal")
const closeInstrModalBtn = document.querySelector("#closeModal")
        
const diceRollBtn = document.querySelector("#dice-roll-btn")
const diceModal = document.querySelector("#dice-roll")
        
const openInstrModal = (evt) => {
    instructionModal.style.display = "block";
}
        
const closeInstrModal = (evt) => {
    instructionModal.style.display = "none"
}

//Event Listeners

closeInstrModalBtn.addEventListener("click", closeInstrModal)

setTimeout(openInstrModal, 1000)

document.addEventListener('keydown',(evt) => {
    // console.log(evt)
    if(evt.keyCode =='83'){
        let diceNum = renderGame()
    }
})

// diceRollBtn.addEventListener('click', (evt) => {
//         let diceNum = player.roll()
//     }
// )