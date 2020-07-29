let isPlaying = false
let cells = []
let simple = []
let landscape

for (i = 0; i < 25; i++) {
    cells.push([])
}

function setup() {
    simple = []
    createCanvas(1000, 625)
    frameRate(30)
    textSize(30);
    textAlign(CENTER)
    const rows = 25
    const columns = 25
    const cellWidth = width / columns

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            cell = new Cell(createVector(cellWidth * j, 25 * i), cellWidth, 24, color(0, 0, 0), color(0))
            cells[i].push(cell)
            simple.push(cell)
        }
    }
    simple.forEach(item => {
        item.getNeighbors(cells)
    })
    landscape = new Landscape(simple)
}

let currentGen = 0
let nxtgen = 1

function draw() {
    background(0, 0, 0)
    stroke(255)

    for (let i = 0; i < simple.length; i++) {
        cell = simple[i]
        cell.display()
    }

    if (isPlaying) {

        if (frameCount % 30 === 0) {
            currentGen++
        }

        if (frameCount % 15 === 0 && currentGen < nxtgen) {
            landscape.buffer()
            console.log(currentGen, 'current gen')
        }

        if (currentGen === nxtgen) {
            console.log('it worked')
            nxtgen++
            landscape.nextGen()
        }

    } else {
        for (let i = 0; i < simple.length; i++) {
            if (mouseX < simple[i].location.x + simple[i].width && mouseX > simple[i].location.x &&
                mouseY < simple[i].location.y + simple[i].height && mouseY > simple[i].location.y) {
                if (mouseIsPressed && mouseButton == LEFT) {
                    if (frameCount % 2 === 0) {
                        simple[i].toggle()
                    }
                }
            }
        }
    }

}

const parentDiv = document.querySelector("body")

const startBtn = document.createElement('button')
startBtn.textContent = 'Start'
startBtn.classList.add('start')
parentDiv.append(startBtn)

const stopBtn = document.createElement('button')
stopBtn.classList.add('stop')
stopBtn.textContent = 'Stop'
parentDiv.append(stopBtn)

startBtn.addEventListener('click', () => {
    isPlaying = true
})

stopBtn.addEventListener('click', () => {
    isPlaying = false
})

draw()