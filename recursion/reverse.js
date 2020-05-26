function reverse (str) {
  const length = str.length
  if (length === 1) return str
  return str[length - 1].concat(reverse(str.substring(-1, length - 1)))
}

console.log(reverse('awesome'))
