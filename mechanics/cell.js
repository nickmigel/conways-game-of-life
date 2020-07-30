class Cell {
    constructor(location, width, height, color, stroke) {
        this.life = false
        this.location = location
        this.width = width
        this.height = height
        this.color = color
        this.stroke = stroke
        this.neighbors = []
        this.next = false
    }

    isAlive() {
        this.next = !this.life
    }

    toggle() {
        this.life = !this.life
        this.next = !this.next
        if (this.life) {
            this.color = color(255)
        } else {
            this.color = color(0)
        }
    }

    display() {
        fill(this.color)
        rect(this.location.x, this.location.y, this.width, this.height)
        stroke(this.stroke)
    }

    getnext() {
        this.life = this.next
        if (this.life) {
            this.color = color(255)
        } else {
            this.color = color(0)
        }
    }

    removeUndifined() {
        let placeHolder = []
        for (i = 0; i < this.neighbors.length; i++) {
            if (this.neighbors[i] !== undefined) {
                placeHolder.push(this.neighbors[i])
            }
        }
        this.neighbors = placeHolder
    }

    getNeighbors(matrix) {
        for (i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j].location.x === this.location.x && matrix[i][j].location.y === this.location.y) {
                    if (i === 0) {
                        if (j === 0) {
                            this.neighbors = [matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]]
                        } else if (j === matrix[i].length) {
                            this.neighbors = [matrix[i][j - 1], matrix[i + 1][j], matrix[i + 1][j - 1]]
                        } else {
                            this.neighbors = [matrix[i][j - 1], matrix[i][j + 1], matrix[i + 1][j - 1], matrix[i + 1][j], matrix[i + 1][j + 1]]
                        }
                    } else if (i === matrix.length - 1) {
                        if (j === 0) {
                            this.neighbors = [matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i][j + 1]]
                        } else if (j === matrix[i].length) {
                            this.neighbors = [matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]]
                        } else {
                            this.neighbors = [matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i][j - 1], matrix[i][j + 1]]
                        }
                    } else {
                        if (j === 0) {
                            this.neighbors = [matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]]
                        } else if (j === matrix[i].length) {
                            this.neighbors = [matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1], matrix[i + 1][j - 1], matrix[i - 1][j]]
                        } else {
                            this.neighbors = [matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i][j - 1], matrix[i][j + 1], matrix[i + 1][j - 1], matrix[i + 1][j], matrix[i + 1][j + 1]]
                        }
                    }
                }
            }
        }
        this.removeUndifined()
        return this.neighbors
    }
}