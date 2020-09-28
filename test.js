let fs = require('fs')
let rawdata = JSON.parse(fs.readFileSync('data.json'))

const data = []

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

let selectDay = 0
for (let i = 1; i < rawdata.length; i++) {
  console.log(rawdata[i])
  const dataItem = {
    name: weekDays[selectDay],
    value: rawdata[i].value,
    hour: (i % 24) + 1,
  }

  if (i % 24 === 0) {
    selectDay++
  }

  data.push(dataItem)
}

fs.writeFileSync('data.json', JSON.stringify(data))
