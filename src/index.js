module.exports = function towelSort(matrix) {
    if (!matrix) return []

    return matrix.reduce((accumulator, element, index) => {
        if (index % 2 == 0) accumulator.push(...element)
        else accumulator.push(...element.reverse())
        return accumulator
    }, [])
}
