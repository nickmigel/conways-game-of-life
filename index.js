

function setup() {
    createCanvas(1000, 500)
    frameRate(30)
    textSize(30);
    textAlign(CENTER)
}
let testing = 0
function draw() {
    background(0, 0, 0)
    stroke(255)
    if (frameCount % 30 === 0) {
        testing++
    }
    text(testing, width / 2, height / 2)
}

draw()