function same (str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  const frequncyCounter1 = {}
  const frequncyCounter2 = {}

  for (const val of str1) {
    frequncyCounter1[val] = (frequncyCounter1[val] || 1)
  }

  for (const val of str2) {
    frequncyCounter2[val] = (frequncyCounter2[val] || 1)
  }

  for (const key in frequncyCounter1) {
    if (!(key in frequncyCounter2)) {
      return false
    }
    if (frequncyCounter1[key] !== frequncyCounter2[key]) {
      return false
    }
    return true
  }
}
