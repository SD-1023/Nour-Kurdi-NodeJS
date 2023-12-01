const wordCount = require('word-count')
const fs = require('fs')


fs.readFile('config.json', 'utf8', (error, data) => {
    if (error) {
      throw error
    } else {
        const files = JSON.parse(data)
        const filesArray = files.files

        filesArray.forEach(filePath => {
            
            fs.readFile(filePath, 'utf8', (error, data) => {
                if (error) {
                  console.log(`${filePath} not found`)
                } else {
                    wordCount(data) === 0 ? console.log(`${filePath} is empty`) : console.log(`${filePath}: ${wordCount(data)} words `)
                }
              })
        })
    }
  })