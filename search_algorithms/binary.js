function binarySearch (arr, find) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  if (arr.length === 0) {
    return -1
  }

  while (find !== arr[middle] && start <= end) {
    if (find < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }

  return find === arr[middle] ? middle : -1
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 3))
