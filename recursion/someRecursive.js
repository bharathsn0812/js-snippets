// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0

function someRecursive (arr, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false
  return callback(arr[0]) || someRecursive(arr.slice(1), callback)
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

console.log(someRecursive([1, 2, 3, 4], isOdd))
