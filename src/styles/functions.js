import { dBase } from './variables'

// Convert pixel values to rem
export const u = (...values) => {
  let remVals = []

  if (!Array.isArray(values)) {
    return `${values / dBase}rem`
  }

  values.forEach(val => {
    if (val === 0) {
      remVals.push('0')
    } else {
      remVals.push(`${val / dBase}rem`)
    }
  })
  return remVals.join(' ');
}

// Shorthand for width/height of same value
export const size = (value) => `
  width: ${u(value)};
  height: ${u(value)};
`

// Convert to rgba from hex
export const rgba = (hex, alpha) => {
  let pureHex = hex

  if (hex.length > 7) {
    throw new Error('Incorrect hex code length')
  }

  if (hex[0] === '#') {
    pureHex = hex.substr(1)
  }

  const rgb = {
    red: parseInt(pureHex[0] + pureHex[1], 16),
    green: parseInt(pureHex[2] + pureHex[3], 16),
    blue: parseInt(pureHex[4] + pureHex[5], 16)
  }

  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`
}