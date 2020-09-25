let fs = require('fs')
let data = []

const sign = 1

for (let index = 0; index < 30; index++) {
  let value = Math.random() * 10 + 5
  value = value.toFixed(2)
  data.push(value * sign)
}

for (let index = 0; index < 10; index++) {
  let value = Math.random() * 40 + 15
  value = value.toFixed(2)
  data.push(value * sign)
}

for (let index = 0; index < 10; index++) {
  let value = Math.random() * 40 + 25
  value = value.toFixed(2)
  data.push(value * sign)
}
for (let index = 0; index < 5; index++) {
  let value = Math.random() * 40 + 30
  value = value.toFixed(2)
  data.push(value * sign)
}
for (let index = 0; index < 5; index++) {
  let value = Math.random() * 40 + 35
  value = value.toFixed(2)
  data.push(value * sign)
}
for (let index = 0; index < 5; index++) {
  let value = Math.random() * 35 + 30
  value = value.toFixed(2)
  data.push(value * sign)
}
for (let index = 0; index < 5; index++) {
  let value = Math.random() * 30 + 25
  value = value.toFixed(2)
  data.push(value * sign)
}
for (let index = 0; index < 5; index++) {
  let value = Math.random() * 15 + 5
  value = value.toFixed(2)
  data.push(value * sign)
}

for (let index = 0; index < 5; index++) {
  let value = Math.random() * 5
  value = value.toFixed(2)
  data.push(value * sign)
}

while (data.length < 168) {
  data.push(null)
}

// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// let selectDate = 0
// const categorizedData = data.map((e, i) => {
//   const obj = {
//     x: days[selectDate],
//     y: e,
//   }

//   if (i % 24 === 0 && i !== 0 && i > 71) {
//     selectDate++
//   }

//   return obj
// })

console.log(categorizedData)
fs.writeFileSync('mockFeed.json', JSON.stringify(categorizedData))
