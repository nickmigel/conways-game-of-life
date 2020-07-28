class Cell {
    constructor(location, width, height, color, stroke) {
        this.life = false
        this.location = location
        this.width = width
        this.height = height
        this.color = color
        this.stroke = stroke
    }

    isAlive() {
        this.life = !this.life
        if (this.life) {
            this.color = color(255)
            this.stroke = color(0)
        } else {
            this.color = color(0)
            this.stroke = color(255)
        }


    }

    display() {
        fill(this.color)
        rect(this.location.x, this.location.y, this.width, this.height)
        stroke(this.stroke)
    }
}