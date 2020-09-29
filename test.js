let fs = require('fs')
// let rawdata = JSON.parse(fs.readFileSync('pages/dashboard/overview/_components/LineChart/mockData.json'))

// const data = []

// const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// let selectDay = 0
// for (let i = 1; i < rawdata.length; i++) {
//   if (rawdata[i].value === 0) {
//     rawdata[i].value = Math.random() * 4 + 1
//   }
//   const dataItem = {
//     name: weekDays[selectDay],
//     value: Math.round(rawdata[i].value),
//     hour: (i % 24) + 1,
//   }

//   if (i % 24 === 0) {
//     selectDay++
//   }

//   data.push(dataItem)
// }

const data = []

for (let i = 1; i <= 30; i++) {
  const newObj = {
    x: i + ' Sep',
    y: Math.random() * 10,
  }
  data.push(newObj)
}

fs.writeFileSync('mockData.json', JSON.stringify(data))
