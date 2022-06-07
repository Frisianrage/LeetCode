/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    //turns th array with subarrays in a single array
    const flatMat = mat.flat();
    
    //checks if the operation with the given parameters is possible
    if (flatMat.length !== r * c) {
        return mat;
    }
    
    const result = [];
    
    let idx = 0;
    
    //loop iterates through each row
    for (let i = 0; i < r; i += 1) {
        //loop iterates through each column
        for (let j = 0; j < c; j += 1) {
            //if result with index i (row number i) is false, then result at this index is an empty array
            if (!result[i]) {
                result[i] = [];
            }
            //result at row i and colum j gets value of given array at index idx
            result[i][j] = flatMat[idx];
            //after filling given array with value, increment idx for the position in array
            idx += 1;
        }
    }
    return result;
};