const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use('/', express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended: false}))

app.post('/', (req, res) => {
    fs.appendFile('data.txt', JSON.stringify(req.body, null, 2) + '\n', (err) => {
        if (err) res.status(500).send('Failed to save in file!')
        return
    })

    res.status(200).send('Info appended in file data.txt')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
