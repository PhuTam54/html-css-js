const express = require('express')
const morgan = require('morgan')
const hbs  = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static('./src/public'))
app.use(express.urlencoded())
app.use(express.json())

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', hbs.engine({
  extname: ".hbs"
}))
app.set('view engine', 'hbs')
app.set('views', './src/resources/views')

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})