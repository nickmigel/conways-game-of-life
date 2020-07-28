let isPlaying = false
let cells = []

for (i = 0; i < 25; i++) {
    cells.push([])
}

function setup() {
    createCanvas(1000, 625)
    frameRate(30)
    textSize(30);
    textAlign(CENTER)
    const rows = 25
    const columns = 25
    const cellWidth = width / columns

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            cell = new Cell(createVector(cellWidth * j, 25 * i), cellWidth, 24, color(0, 0, 0), color(255))
            cells[i].push(cell)
        }
    }
}

let testing = 0

function draw() {
    background(0, 0, 0)
    stroke(255)
    if (frameCount % 30 === 0) {
        testing++
    }

    for (let i = 0; i < cells.length; i++) {
        for (j = 0; j < cells[i].length; j++) {
            let cell = cells[i][j]
            cell.display()

        }
    }

    if (isPlaying) {
        return
    } else {
        for (let i = 0; i < cells.length; i++) {
            for (j = 0; j < cells[i].length; j++) {
                if (mouseX < cells[i][j].location.x + cells[i][j].width && mouseX > cells[i][j].location.x &&
                    mouseY < cells[i][j].location.y + cells[i][j].height && mouseY > cells[i][j].location.y) {
                    if (mouseIsPressed && mouseButton == LEFT) {
                        if (frameCount % 2 === 0) {
                            cells[i][j].isAlive()
                        }
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