const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { resources } = require('./routes')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/resources', resources)

app.get('/', function (req, res) {
  res.json({
    message: 'Hello, World',
  })
})

app.listen(PORT, function () {
  console.log('http://localhost:' + PORT + '에서 서버가 동작중입니다')
})
