// Check if number is positive integer
export function isNormalInteger(num) {
  return /^\+?(1|[1-9]\d*)$/.test(num)
}

// Split an array into equally sized sub-arrays
export function splitToChunks(array, chunkSize) {
  if (!isNormalInteger(chunkSize)) {
    return array
  }

  let arr = [...array]
  let result = []
  let numberOfItems = Math.ceil((array.length / chunkSize))

  for (let i = 0; i < chunkSize; i++) {
    result.push(arr.splice(0, numberOfItems))
  }
  return result
}
