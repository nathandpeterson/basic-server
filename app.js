const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = process.env.PORT || 3000

app.use(morgan('dev'))

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({message: 'hi!'})
})

app.use((req, res, next) => {
  res.status(404).json({message: 'something went wrong! :('})
})

const listener = () => {console.log(`:) listening on ${port}`)}
app.listen(port, listener)
