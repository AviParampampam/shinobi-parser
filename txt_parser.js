const { join } = require('path')
const fs = require('fs')

const allContent = fs.readFileSync(join(__dirname, 'all.txt')).toString()
const outputPath = join(__dirname, 'listcam.json')

const result = {}
let camCounter = 1

for (const i of allContent.split('\n')) {
	if (i.length) {
		formatI = i.replace(/\s+/, ' ')
		const splitIndex = formatI.indexOf(' ')
		const rtsp = formatI.substr(0, splitIndex)
		const name = formatI.substr(splitIndex + 1, formatI.length)
		result[`cam${camCounter++}`] = {
			title: name.replace('\r', ''),
			rtsp: rtsp
		}
	}
}

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2))
