function linearSearch (arr, value) {
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            index  = i
            break
        }
    }
    return index
}

console.log(linearSearch(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'], 'wed'))