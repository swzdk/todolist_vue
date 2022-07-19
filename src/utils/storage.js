export const setLocal = (key, value) => {
  const type = Object.prototype.toString.call(value).slice(8, -1)
  console.log(value, type)
  if (type !== 'Object' && type !== 'Array' && type !== 'Function') {
    localStorage.setItem(key, value)
  } else {
    console.log('执行转义')
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const getLocal = (key) => {
  const val = localStorage.getItem(key)
  if (val === null || val === 'null') {
    return null
  } else {
    return JSON.parse(val)
  }
}
