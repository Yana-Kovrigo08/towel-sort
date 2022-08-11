
// You should implement your task here.

module.exports = function towelSort (matrix) {

  const half = matrix.length / 2
  
  // Base case or terminating case
  if(matrix.length < 2){
    return matrix 
  }
  
  const left = matrix.splice(0, half)
  return towelSort(towelSort(left),towelSort(matrix))
}
