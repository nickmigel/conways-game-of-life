class Landscape {
    constructor(matrix) {
        this.matrix = matrix
    }

}

//landscape will have atleast a matrix of cells in a 25x25 grid
    //a cell can be a true/false boolean
//question? should i handle cell life in landscape or in the cell?
    //if in landscape i would be able to handle a cells life or death using the matrix directly
    //if i handle it inside the cell it might be more difficult to get its neighbors 
    //how will i know when a cell is alive or dead?
    //might be best to first create a grid and fill it with an empty matrix 