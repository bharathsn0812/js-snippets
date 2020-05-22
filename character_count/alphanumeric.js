function alphanumericCharCount (str) {
  var obj = {}
  for (var char of str) {
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}