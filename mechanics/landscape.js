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
        if (cell.life && counter === 3 || counter === 2) {
            console.log('this ran', counter)
            cell.isAlive()
        } else if (cell.life === false && counter === 3) {
            console.log('the else ran')
            cell.isAlive()
        }
        return cell
    }

    buffer() {
        this.matrix.forEach((item, i) => {
            this.checkAlive(item)
            this.nextMatrix[i] == item
        })
    }

    nextGen() {
        this.matrix = this.nextMatrix
        this.nextMatrix.forEach(item => {
            item.getnext()
        })
    }
}

//landscape will have atleast a matrix of cells in a 25x25 grid
    //a cell can be a true/false boolean
//question? should i handle cell life in landscape or in the cell?
    //if in landscape i would be able to handle a cells life or death using the matrix directly
    //if i handle it inside the cell it might be more difficult to get its neighbors 
    //how will i know when a cell is alive or dead?
    //might be best to first create a grid and fill it with an empty matrix 