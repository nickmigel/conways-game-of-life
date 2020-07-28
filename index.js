let isPlaying = false
let cells = []

function mouseReleased() {

}

function setup() {
    createCanvas(1200, 625)
    frameRate(30)
    textSize(30);
    textAlign(CENTER)
    const rows = 25
    const columns = 25
    const cellWidth = width / columns

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            cell = new Cell(createVector(cellWidth * j, 25 * i), cellWidth, 24, color(0, 0, 0), color(255))
            cells.push(cell)
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
        let cell = cells[i]
        cell.display()

    }
    if (testing === 1) {
        // console.log(cells)
    }

    for (let i = 0; i < cells.length - 1; i++) {
        if (mouseX < cells[i].location.x + cells[i].width && mouseX > cells[i].location.x &&
            mouseY < cells[i].location.y + cells[i].height && mouseY > cells[i].location.y) {
            if (mouseIsPressed && mouseButton == LEFT) {
                if (frameCount % 2 === 0) {
                    cells[i].isAlive()
                    console.log(mouseX, mouseY, 'x,', ' y', cells[0].location.x + cells[0].width, cells[0].location.y + cells[0].height)
                }
            }
        }
    }

}


draw()