const { join } = require('path')
const fs = require('fs')

const example = require(join(__dirname, 'input.json'))
const outputFile = join(__dirname, 'output.json')
const result = {}

for (const i of example)
  result[i.mid] =
    {
      title: i.name,
      rtsp: JSON.parse(i.details).auto_host
    }


fs.writeFileSync(outputFile, JSON.stringify(result, null, 2))
  
  

