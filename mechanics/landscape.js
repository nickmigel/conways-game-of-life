class Landscape {
    constructor(matrix) {
        this.matrix = matrix
        this.nextMatrix = [...this.matrix]
    }
    checkAlive(cell) {
        let counter = 0
        cell.neighbors.forEach(item => {
            if (item.life) {
                counter++
            }
        })
        if (cell.life) {
            if (counter < 2 || counter > 3) {
                cell.isAlive()
            } else {
                return
            }
        } else if (!cell.life) {
            if (counter === 3) {
                cell.isAlive()
            }
        }
    }

    buffer() {
        this.matrix.forEach((item, i) => {
            this.checkAlive(item)
            this.nextMatrix[i] == item
        })
    }

    nextGen() {
        this.matrix = this.nextMatrix
        this.matrix.forEach(item => {
            item.getnext()
        })
    }
}