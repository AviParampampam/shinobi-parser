const { join } = require('path')
const fs = require('fs')

const example = require(join(__dirname, 'example.json'))

for (const i of example)
  console.log(`${i.mid}\t${JSON.parse(i.details).auto_host}`)

